import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SingleArticle from "@/components/templates/single-article";
import Container from "@/components/atoms/container";
import PageHeader from "@/components/molecules/page-header";
import RootContext from "@/context/RootContext";
import { useContext } from "react";


const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "news" });

  const paths = res.items.map((item) => {
    return { params: { slug: item.fields.slug ? item.fields.slug : "" } };
  });

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "news",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { news: items[0] },
    revalidate: 10,
  };
}

const SingleNews = ({ news }) => {
  if (!news) return <div>No such address</div>;

  const { lang } = useContext(RootContext);

  const { titlePl, leadPl, contentPl, image } = news.fields;

  return (
    <Container>
      <PageHeader>{lang === "en" ? "News" : "Aktualności"}</PageHeader>
      <SingleArticle
        title={titlePl}
        lead={leadPl}
        content={documentToReactComponents(contentPl)}
        img={news?.fields?.image ? news.fields.image : ""}
        gallery={news?.fields?.gallery ? news.fields.gallery : ""}
      ></SingleArticle>
    </Container>
  );
};

export default SingleNews;
