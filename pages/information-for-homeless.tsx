import ArticleLead from "@/components/atoms/article-lead";
import Container from "@/components/atoms/container";
import PageHeader from "@/components/molecules/page-header";
import TitleWithDevider from "@/components/molecules/title-with-divider";
import { Faq } from "@/components/organisms/faq";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "informationForHomeless",
  });

  return {
    props: {
      informationForHomeless: res.items,
    },
  };
}

const informationForHomeless = ({ informationForHomeless }) => {
  console.log(informationForHomeless);
  const {
    titlePl,
    titleEn,
    leadPl,
    leadEn,
    image,
    question1Pl,
    question2Pl,
    question3Pl,
    question4Pl,
    question5Pl,
    question6Pl,
    question7Pl,
    question1En,
    question2En,
    question3En,
    question4En,
    question5En,
    question6En,
    question7En,
    answer1Pl,
    answer2Pl,
    answer3Pl,
    answer4Pl,
    answer5Pl,
    answer6Pl,
    answer7Pl,
    answer1En,
    answer2En,
    answer3En,
    answer4En,
    answer5En,
    answer6En,
    answer7En,
  } = informationForHomeless[0].fields;

  return (
    <Container>
      <PageHeader>Informacje dla osób bezdomnych</PageHeader>
      <div className"max-w-3xl mx-auto mt-10 mb-16">
        <TitleWithDevider>{titlePl}</TitleWithDevider>
        <img
          src={image.fields.file.url}
          className="w-full object-cover rounded-lg my-10"
        ></img>
        <ArticleLead>{documentToReactComponents(leadPl)}</ArticleLead>
        <Faq content={informationForHomeless}></Faq>
      </div>
    </Container>
  );
};

export default informationForHomeless;
