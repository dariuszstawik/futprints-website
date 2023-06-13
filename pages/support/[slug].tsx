import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Container from "@/components/atoms/container";
import PageHeader from "@/components/molecules/page-header";
import SingleArticle from "@/components/templates/single-article";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "support1" });

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
    content_type: "support1",
    "fields.slug": params.slug,
  });

  console.log(params);

  return {
    props: { support1: items[0] },
  };
}

const SupportArticle = ({ support1 }) => {
  const img = "img14.jpg";
  console.log(support1);
  return (
    <Container>
      <PageHeader>Jak możesz pomóc</PageHeader>
      <SingleArticle
        title={support1.fields.titlePl}
        lead={documentToReactComponents(support1.fields.leadPl)}
        content={documentToReactComponents(support1.fields.textPl)}
        img={support1.fields.icon.fields.file.url}
        hasIcon
      ></SingleArticle>
    </Container>
  );
};

export default SupportArticle;
