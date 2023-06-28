import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Container from "@/components/atoms/container";
import PageHeader from "@/components/molecules/page-header";
import SingleArticle from "@/components/templates/single-article";
import RootContext from "@/context/RootContext";
import { useContext } from "react";

// if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_KEY) {
//   throw Error("Env variable error");
// }

// if (
//   !process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ||
//   !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY
// ) {
//   throw Error("Env variable error");
// }

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  // space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  // accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
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

  return {
    props: { support1: items[0] },
  };
}

const SupportArticle = ({ support1 }) => {
  const { lang } = useContext(RootContext);
  console.log(support1.fields.textPl);

  return (
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
        hasIcon
      ></SingleArticle>
    </Container>
  );
};

export default SupportArticle;
