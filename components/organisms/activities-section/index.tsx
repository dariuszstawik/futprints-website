import Divider from "@/components/atoms/divider";
import HeaderParagraph from "@/components/atoms/header-paragraph";
import HeaderTitle from "@/components/atoms/header-title";
import SectionTitle from "@/components/atoms/section-title";
import ActivitiesCard from "@/components/molecules/activities-card";
import React from "react";
import Fade from "react-reveal/Fade";

const ActivitiesSection = () => {
  return (
    <div className="my-10">
      <div className="min-w-96 max-w-[800px] mx-auto my-6 flex flex-col items-center">
        <SectionTitle>Nasze działania</SectionTitle>
        <Divider />
      </div>
      <div className="px- py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-0 lg:py-10">
        <div className="grid gap-6 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
          <Fade bottom>
            <ActivitiesCard
              img="centrum_spolecznosciowe2.jpg"
              title="Centrum społecznościowe"
            />
            <ActivitiesCard
              img="streetworking.jpg"
              title="Streetworking w Katowicach"
            />
            <ActivitiesCard
              img="obcokrajowcy.jpg"
              title="Wsparcie dla cudzoziemców"
            />
            <ActivitiesCard img="schroniska.jpg" title="Inne działania" />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;
