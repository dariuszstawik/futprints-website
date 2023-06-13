import Divider from "@/components/atoms/divider";
import SectionTitle from "@/components/atoms/section-title";
import NewsCard from "@/components/molecules/news-card";
import React from "react";

const NewsSection = ({ content, isHomepage }) => {
  return (
    <div className="mt-10 mb-28">
      <div className="min-w-96 max-w-[800px] mx-auto my-6 flex flex-col items-center">
        <SectionTitle>
          {isHomepage ? "Aktualności" : "Informacje i wydarzenia"}
        </SectionTitle>
        <Divider />
      </div>
      <div className="px- py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-0 lg:py-10">
        <ul className="grid gap-6 row-gap-5 md:row-gap-8 sm:mx-auto md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {content.map((item, i) => {
            return (
              <li key={i}>
                <NewsCard
                  title={item.fields.titlePl}
                  content={item.fields.leadPl}
                  slug={item.fields.slug}
                />{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NewsSection;
