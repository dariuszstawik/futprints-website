import Divider from "@/components/atoms/divider";
import HeaderParagraph from "@/components/atoms/header-paragraph";
import HeaderTitle from "@/components/atoms/header-title";
import SectionTitle from "@/components/atoms/section-title";
import ActivitiesCard from "@/components/molecules/activities-card";
import NewsCard from "@/components/molecules/news-card";
import React from "react";

const NewsSection = () => {
  return (
    <div className="mt-10 mb-28">
      <div className="min-w-96 max-w-[800px] mx-auto my-6 flex flex-col items-center">
        <SectionTitle>Aktualności</SectionTitle>
        <Divider />
      </div>
      <div className="px- py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-0 lg:py-10">
        <div className="grid gap-6 row-gap-5 md:row-gap-8 sm:mx-auto md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
