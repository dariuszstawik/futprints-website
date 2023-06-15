import React from "react";
import Container from "@/components/atoms/container";
import PageHeader from "@/components/molecules/page-header";
import NewsSection from "@/components/organisms/news-section";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "news" });

  return {
    props: {
      news: res.items,
    },
  };
}

const News = ({ news }) => {
  return (
    <div>
      <Container>
        <PageHeader>Aktualności</PageHeader>
        <div className="px-32 py-10">
          <NewsSection content={news}></NewsSection>
        </div>
      </Container>
    </div>
  );
};

export default News;
