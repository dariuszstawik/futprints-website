import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Container from "@/components/atoms/container";
import PageHeader from "@/components/molecules/page-header";
import SingleArticle from "@/components/templates/single-article";
import RootContext from "@/context/RootContext";
import { useContext } from "react";
import Layout from "@/components/templates/layout";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ? process.env.CONTENTFUL_SPACE_ID : "",
  accessToken: process.env.CONTENTFUL_ACCESS_KEY
    ? process.env.CONTENTFUL_ACCESS_KEY
    : "",
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "support1" });

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
    content_type: "support1",
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
    props: { support1: items[0], footer: resFooter.items },
    revalidate: 10,
  };
}

const SupportArticle = ({ support1, footer }) => {
  if (!support1) return <div>No such address</div>;

  const { lang } = useContext(RootContext);
  console.log(support1.fields.textPl);

  return (
    <Layout footer={footer}>
      <Container>
        <PageHeader>
          {lang === "en" ? "Support us" : "Jak możesz pomóc"}
        </PageHeader>
        <SingleArticle
          title={
            lang === "en" && support1.fields.titleEn
              ? support1.fields.titleEn
              : support1.fields.titlePl
          }
          lead={
            lang === "en" && support1.fields.leadEn
              ? support1.fields.leadEn
              : support1.fields.leadPl
          }
          content={
            lang === "en" && support1.fields.textEn
              ? documentToReactComponents(support1.fields.textEn)
              : documentToReactComponents(support1.fields.textPl)
          }
          img={support1.fields.icon ? support1.fields.icon : ""}
          gallery={support1.fields.gallery ? support1.fields.gallery : ""}
          hasIcon
        ></SingleArticle>
      </Container>
    </Layout>
  );
};

export default SupportArticle;
