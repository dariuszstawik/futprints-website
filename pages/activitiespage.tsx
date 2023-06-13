import Divider from "@/components/atoms/divider";
import SectionTitle from "@/components/atoms/section-title";
import ActivitiesCard from "@/components/molecules/activities-card";
import React from "react";
import Fade from "react-reveal/Fade";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "activities" });

  return {
    props: {
      activities: res.items,
    },
  };
}

const activitiespage = ({ activities }) => {
  console.log(activities);
  return (
    <div className="my-10">
      <div className="min-w-96 max-w-[800px] mx-auto my-6 flex flex-col items-center">
        <SectionTitle>Nasze działania</SectionTitle>
        <Divider />
      </div>
      <div className="px- py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-0 lg:py-10">
        <div className="grid gap-6 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
          <Fade bottom>
            {activities.map((activity, i) => {
              return (
                <ActivitiesCard
                  key={i}
                  img={activity.fields.thumbnail.fields.file.url}
                  title={activity.fields.titlePl ? activity.fields.titlePl : ""}
                />
              );
            })}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default activitiespage;
