import ArticleLead from "@/components/atoms/article-lead";
import Container from "@/components/atoms/container";
import PageHeader from "@/components/molecules/page-header";
import TitleWithDevider from "@/components/molecules/title-with-divider";
import { Faq } from "@/components/organisms/faq";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";

interface InformationForForeignersProps {
  informationForForeigners: {
    fields: {
      titlePl: string;
      titleEn: string;
      leadPl: string;
      leadEn: string;
      question1Pl: string;
      question2Pl: string;
      question3Pl: string;
      question4Pl: string;
      question5Pl: string;
      question6Pl: string;
      question7Pl: string;
      question1En: string;
      question2En: string;
      question3En: string;
      question4En: string;
      question5En: string;
      question6En: string;
      question7En: string;
      answer1Pl: React.ReactNode;
      answer2Pl: React.ReactNode;
      answer3Pl: React.ReactNode;
      answer4Pl: React.ReactNode;
      answer5Pl: React.ReactNode;
      answer6Pl: React.ReactNode;
      answer7Pl: React.ReactNode;
      answer1En: React.ReactNode;
      answer2En: React.ReactNode;
      answer3En: React.ReactNode;
      answer4En: React.ReactNode;
      answer5En: React.ReactNode;
      answer6En: React.ReactNode;
      answer7En: React.ReactNode;
      image: {
        fields: {
          file: {
            url: string;
            details: {
              image: {
                width: number;
                height: number;
              };
            };
          };
        };
      };
    };
  }[];
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "informationForForeigners",
  });

  return {
    props: {
      informationForForeigners: res.items,
    },
  };
}

const informationForForeigners = ({
  informationForForeigners,
}: InformationForForeignersProps) => {
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
  } = informationForForeigners[0].fields;

  return (
    <Container>
      <PageHeader>Information for foreigners</PageHeader>
      <div className="max-w-3xl mx-auto mt-10 mb-16">
        <TitleWithDevider>{titlePl}</TitleWithDevider>
        <img
          src={`https://${image.fields.file.url}`}
          width={image.fields?.file?.details?.image?.width}
          height={image.fields?.file?.details?.image?.height}
          className="w-full object-cover rounded-lg my-10"
        ></img>
        <ArticleLead>{leadPl}</ArticleLead>
        <Faq content={informationForForeigners}></Faq>
      </div>
    </Container>
  );
};

export default informationForForeigners;
