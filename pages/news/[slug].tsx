import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SingleArticle from "@/components/templates/single-article";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "news" });

  const paths = res.items
    .filter((item) => Boolean(item.fields.slug))
    .map((item) => {
      return { params: { slug: item.fields.slug } };
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

  console.log(params);

  return {
    props: { news: items[0] },
  };
}

export default function SingleNews({ news }) {
  console.log(news);

  const { titlePl, leadPl, contentPl, image } = news.fields;
  const img = "img14.jpg";

  return (
    <SingleArticle
      title={titlePl}
      lead={leadPl}
      content={documentToReactComponents(contentPl)}
      img={img}
    ></SingleArticle>
  );
}
