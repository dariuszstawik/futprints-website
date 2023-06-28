import React, { useContext } from "react";
import Container from "@/components/atoms/container";
import PageHeader from "@/components/molecules/page-header";
import NewsSection from "@/components/organisms/news-section";
import { createClient } from "contentful";
import RootContext from "@/context/RootContext";

interface NewsProps {
  news: {
    fields: {
      titleEn: string;
      titlePl: string;
      leadPl: string;
      leadEn: string;
      slug: string;
      contentPl: React.ReactNode;
      contentEn: React.ReactNode;
      image: {
        fields: {
          description?: string;
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
  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_KEY) {
    throw Error("Env variable error");
  }
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

const News = ({ news }: NewsProps) => {
  const { lang } = useContext(RootContext);

  return (
    <div>
      <Container>
        <PageHeader>{lang === "en" ? "News" : "Aktualności"}</PageHeader>
        <div className="px-32 py-10">
          <NewsSection content={news}></NewsSection>
        </div>
      </Container>
    </div>
  );
};

export default News;
