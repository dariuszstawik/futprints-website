import React from "react";
import Container from "@/components/atoms/container";
import PageHeader from "@/components/molecules/page-header";
import Footer from "@/components/organisms/footer";
import Navbar from "@/components/organisms/navbar";
import SingleArticle from "@/components/templates/single-article";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
  const title = partnership[0].fields.titlePl;
  const lead = documentToReactComponents(partnership[0].fields.leadPl);
  const img = "img14.jpg";
  const content = documentToReactComponents(partnership[0].fields.contentPl);

  return (
    <Container>
      <PageHeader>Współpraca</PageHeader>
      <SingleArticle title={title} lead={lead} content={content} img={img} />
    </Container>
  );
};

export default partnership;
