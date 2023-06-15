import Divider from "@/components/atoms/divider";
import SectionTitle from "@/components/atoms/section-title";
import NewsCard from "@/components/molecules/news-card";
import RootContext from "@/context/RootContext";
import React, { useContext } from "react";

const NewsSection = ({ content, isHomepage }) => {
  const { lang } = useContext(RootContext);
  const newsSectionHomepageTitlePl = "Aktualności";
  const newsSectionHomepageTitleEN = "News";
  const newsSectionTitlePl = "Informacje i wydarzenia";
  const newsSectionTitleEn = "News from the Futprints Foundation";

  const newsList = () => {
    return (
      content &&
      content.map((item, i) => {
        // (i<3) &&
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
              img={
                item.fields.image.fields.file.url
                  ? item.fields.image.fields.file.url
                  : ""
              }
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
          {" "}
          Aktualności
          {/* {isHomepage
            ? lang === "en"
              ? { newsSectionHomepageTitleEN }
              : { newsSectionHomepageTitlePl }
            : "Informacje i wydarzenia"} */}
        </SectionTitle>
        <Divider />
      </div>
      <div className="px- py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-0 lg:py-10">
        <ul className="grid gap-6 row-gap-5 md:row-gap-8 sm:mx-auto md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {newsList()}
        </ul>
      </div>
    </div>
  );
};

export default NewsSection;
