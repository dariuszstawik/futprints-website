import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SingleArticle from "@/components/templates/single-article";
import Container from "@/components/atoms/container";
import PageHeader from "@/components/molecules/page-header";
import RootContext from "@/context/RootContext";
import { useContext } from "react";

// if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_KEY) {
//   throw Error("Env variable error");
// }

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
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "news",
    "fields.slug": params.slug,
  });

  return {
    props: { news: items[0] },
  };
}

const SingleNews = ({ news }) => {
  const { lang } = useContext(RootContext);

  const { titlePl, leadPl, contentPl, image } = news.fields;
  console.log(image);
  console.log("Wyśietlam w single news" + news);

  return (
    <Container>
      <PageHeader>{lang === "en" ? "News" : "Aktualności"}</PageHeader>
      <SingleArticle
        title={titlePl}
        lead={leadPl}
        content={documentToReactComponents(contentPl)}
        img={news?.fields?.image ? news.fields.image : ""}
        gallery={news?.fields.gallery ? news.fields.gallery : ""}
      ></SingleArticle>
    </Container>
  );
};

export default SingleNews;
