import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SingleArticle from "@/components/templates/single-article";
import Container from "@/components/atoms/container";
import PageHeader from "@/components/molecules/page-header";
import RootContext from "@/context/RootContext";
import { useContext } from "react";
import Layout from "@/components/templates/layout";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "article" });

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
    content_type: "article",
    "fields.slug": params.slug,
  });

  const resFooter = await client.getEntries({ content_type: "footer" });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { article: items[0], footer: resFooter.items },
    revalidate: 10,
  };
}

const Article = ({ article, footer }) => {
  if (!article) return <div>No such address</div>;

  const { lang } = useContext(RootContext);

  const { titlePl, leadPl, contentPl, image, gallery } = article.fields;

  return (
    <Layout footer={footer}>
      <Container>
        <PageHeader>{lang === "en" ? "Article" : "Artykuł"}</PageHeader>
        <SingleArticle
          title={titlePl}
          lead={leadPl}
          content={documentToReactComponents(contentPl)}
          img={article.fields.image ? article.fields.image : ""}
          gallery={article.fields.gallery ? article.fields.gallery : ""}
        />
      </Container>
    </Layout>
  );
};

export default Article;
