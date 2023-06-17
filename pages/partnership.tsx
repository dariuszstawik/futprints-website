import React, { useContext } from "react";
import Container from "@/components/atoms/container";
import PageHeader from "@/components/molecules/page-header";
import SingleArticle from "@/components/templates/single-article";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import RootContext from "@/context/RootContext";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "partnership" });

  return {
    props: {
      partnership: res.items,
    },
  };
}

const partnership = ({ partnership }) => {
  const { titlePl, titleEn, leadPl, leadEn, contentPl, contentEn, image } =
    partnership[0].fields;

  const { lang } = useContext(RootContext);
  console.log(lang);
  // const title = {
  //   lang === "en" && partnership[0].fields.titleEn
  //     ? partnership[0].fields.titleEn
  //     : partnership[0].fields.titlePl,
  // };

  return (
    <Container>
      <PageHeader>Współpraca</PageHeader>
      <SingleArticle
        title={lang === "en" && titleEn ? titleEn : titlePl}
        lead={lang === "en" && leadEn ? leadEn : leadPl}
        content={
          lang === "en" && contentEn
            ? documentToReactComponents(contentEn)
            : documentToReactComponents(contentPl)
        }
        img={image ? image : ""}
      />
    </Container>
  );
};

export default partnership;
