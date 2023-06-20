import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types"; // Add this import

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
  const res = await client.getEntries({ content_type: "article" });

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
    content_type: "article",
    "fields.slug": params.slug,
  });

  return {
    props: { article: items[0] },
  };
}

const Article = ({ article }) => {
  const { lang } = useContext(RootContext);

  const { titlePl, leadPl, contentPl, image, gallery } = article.fields;

  console.log("artykuł z galerią" + article);
  console.log(article);

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, description, file } = node.data.target.fields;
        const imageUrl = file.url;
        const imageAlt = title || description || "Image";

        return <img src={imageUrl} alt={imageAlt} />;
      },
    },
  };

  return (
    <Container>
      <PageHeader>{lang === "en" ? "Article" : "Artykuł"}</PageHeader>
      <SingleArticle
        title={titlePl}
        lead={leadPl}
        content={documentToReactComponents(contentPl, options)} // Use the options for rendering
        img={article.fields.image ? article.fields.image : ""}
        gallery={article.fields.gallery ? article.fields.gallery : ""}
      />
    </Container>
  );
};

export default Article;
