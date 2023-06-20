import Button from "@/components/atoms/button";
import Divider from "@/components/atoms/divider";
import SectionTitle from "@/components/atoms/section-title";
import NewsCard from "@/components/molecules/news-card";
import RootContext from "@/context/RootContext";
import React, { useContext, useState } from "react";

interface NewsSectionProps {
  isHomepage?: boolean;
  content: {
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

const NewsSection = ({ content, isHomepage }: NewsSectionProps) => {
  const { lang } = useContext(RootContext);

  const [maxAmount, setMaxAmount] = useState(1);

  const increaseMaxAmount = () => {
    setMaxAmount(maxAmount + 1);
  };

  let newsSectionHomepageTitle: string;
  let newsSectionTitle: string;

  newsSectionHomepageTitle = lang === "en" ? "News" : "Aktualności";

  newsSectionTitle =
    lang === "en"
      ? "News from the Futprints Foundation"
      : "Informacje i wydarzenia";

  const newsList = (newsAmount: number) => {
    return (
      content &&
      content.slice(0, newsAmount).map((item, i) => {
        return (
          <li key={i}>
            <NewsCard
              title={
                lang === "en" && item.fields.titleEn
                  ? item.fields.titleEn
                  : item.fields.titlePl
              }
              content={
                lang === "en" && item.fields.leadEn
                  ? item.fields.leadEn
                  : item.fields.leadPl
              }
              slug={item.fields.slug}
              img={item.fields.image ? item.fields.image : ""}
            />{" "}
          </li>
        );
      })
    );
  };

  return (
    <div className="mt-10 mb-28">
      <div className="min-w-96 max-w-[800px] mx-auto my-6 flex flex-col items-center">
        <SectionTitle>
          {isHomepage ? newsSectionHomepageTitle : newsSectionTitle}
        </SectionTitle>
        <Divider />
      </div>
      <div className="px- py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-0 lg:py-10">
        <ul className="list-none grid gap-6 row-gap-5 md:row-gap-8 sm:mx-auto md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {newsList(isHomepage ? 2 : maxAmount)}
        </ul>
        <div className="flex justify-center m-16">
          {!isHomepage && maxAmount < content.length && (
            <Button onClick={increaseMaxAmount}>
              {lang === "en" ? "Load more" : "Załaduj więcej"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
