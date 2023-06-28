import Divider from "@/components/atoms/divider";
import SectionTitle from "@/components/atoms/section-title";
import ActivitiesCard from "@/components/molecules/activities-card";
import React, { useContext } from "react";
// import Fade from "react-reveal/Fade";
const Fade = require("react-reveal/Fade");
import { createClient } from "contentful";
import RootContext from "@/context/RootContext";

interface ActivitiesSectionProps {
  activities: {
    fields: {
      button: string;
      buttonEn: string;
      slug: string;
      paragraph1TitlePl: string;
      paragraph1TitleEn: string;
      paragraph2TitlePl: string;
      paragraph2TitleEn: string;
      paragraph3TitlePl: string;
      paragraph3TitleEn: string;
      paragraph4TitlePl: string;
      paragraph4TitleEn: string;
      paragraph1TextPl: React.ReactNode;
      paragraph2TextPl: React.ReactNode;
      paragraph3TextPl: React.ReactNode;
      paragraph4TextPl: React.ReactNode;
      paragraph1TextEn: React.ReactNode;
      paragraph2TextEn: React.ReactNode;
      paragraph3TextEn: React.ReactNode;
      paragraph4TextEn: React.ReactNode;
      paragraph1Img: {
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
      paragraph2Img: {
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
      paragraph3Img: {
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
      paragraph4Img: {
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
  };
}

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

const ActivitiesSection = ({ activities }: ActivitiesSectionProps) => {
  const { lang } = useContext(RootContext);

  return (
    <div className="my-10">
      <div className="min-w-96 max-w-[800px] mx-auto my-6 flex flex-col items-center">
        <SectionTitle>
          {lang === "en" ? "Activities" : "Nasze działania"}
        </SectionTitle>
        <Divider />
      </div>
      <div className="px- py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-0 lg:py-10">
        <div className="grid gap-6 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
          <Fade bottom>
            {activities.map((activity, i) => {
              return (
                <ActivitiesCard
                  key={i}
                  img={activity.fields.thumbnail}
                  title={
                    lang === "en" && activity.fields.titleEn
                      ? activity.fields.titleEn
                      : activity.fields.titlePl
                  }
                  href={`/single-activity/${activity.fields.slug}`}
                />
              );
            })}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;
