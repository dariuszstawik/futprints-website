import Container from "@/components/atoms/container";
import PageHeader from "@/components/molecules/page-header";
import AboutSection from "@/components/organisms/about-section";
import ActivitiesSection from "@/components/organisms/activities-section";
import Documents from "@/components/organisms/documents";
import SupportSection from "@/components/organisms/support-section";
import TeamSection from "@/components/organisms/team-section";
import RootContext from "@/context/RootContext";
import { createClient } from "contentful";
import React, { useContext } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "activities" });
  const res2 = await client.getEntries({ content_type: "support1" });
  const res3 = await client.getEntries({ content_type: "teamMembers" });
  const res4 = await client.getEntries({ content_type: "documents" });
  const res5 = await client.getEntries({ content_type: "aboutUs" });

  return {
    props: {
      activities: res.items,
      support1: res2.items,
      teamMembers: res3.items,
      documents: res4.items,
      aboutUs: res5.items,
    },
  };
}

const aboutus = ({ activities, support1, teamMembers, documents, aboutUs }) => {
  const { lang } = useContext(RootContext);
  // const content1 =
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut quo quidem et impedit, dolor iure placeat quae nesciunt, temporibus eaque distinctio culpa fugiat vel vitae dolore quam qui non? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, libero earum cum reiciendis animi tenetur debitis inventore doloremque ut fugit adipisci accusamus? Corrupti, eius nisi doloribus esse consequatur ut eos. Lorem ipsum dolor.";

  // const content2 =
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut quo quidem et impedit, dolor iure placeat quae nesciunt, temporibus eaque distinctio culpa fugiat vel vitae dolore quam qui non? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, libero earum cum reiciendis animi tenetur debitis inventore doloremque ut fugit adipisci accusamus? Corrupti, eius nisi doloribus esse consequatur ut eos. Lorem ipsum dolor.";

  const {
    paragraph1TitlePl,
    paragraph2TitlePl,
    paragraph3TitlePl,
    paragraph4TitlePl,
    paragraph1TitleEn,
    paragraph2TitleEn,
    paragraph3TitleEn,
    paragraph4TitleEn,
    paragraph1TextPl,
    paragraph2TextPl,
    paragraph3TextPl,
    paragraph4TextPl,
    paragraph1TextEn,
    paragraph2TextEn,
    paragraph3TextEn,
    paragraph4TextEn,
    paragraph1Img,
    paragraph2Img,
    paragraph3Img,
    paragraph4Img,
    includeActivitiesSection,
    includeSupportSection,
    includeTeamSection,
    includeDocumentSection,
  } = aboutUs[0].fields;

  return (
    <div className="relative">
      <Container>
        <PageHeader>{lang === "en" ? "About us" : "O nas"}</PageHeader>
        {paragraph1TitlePl || paragraph1TitleEn ? (
          <AboutSection
            title={
              lang === "en" && paragraph1TitleEn
                ? paragraph1TitleEn
                : paragraph1TitlePl
            }
            img={paragraph1Img ? paragraph1Img.fields.file.url : "img12.jpg"}
            content={
              lang === "en" && paragraph1TextEn
                ? documentToReactComponents(paragraph1TextEn)
                : documentToReactComponents(paragraph1TextPl)
            }
          ></AboutSection>
        ) : (
          ""
        )}
        {paragraph2TitlePl || paragraph2TitleEn ? (
          <AboutSection
            isReverse
            title={
              lang === "en" && paragraph2TitleEn
                ? paragraph2TitleEn
                : paragraph2TitlePl
            }
            img={paragraph2Img ? paragraph2Img.fields.file.url : "img12.jpg"}
            content={
              lang === "en" && paragraph2TextEn
                ? documentToReactComponents(paragraph2TextEn)
                : documentToReactComponents(paragraph2TextPl)
            }
          ></AboutSection>
        ) : (
          ""
        )}
        {paragraph3TitlePl || paragraph3TitleEn ? (
          <AboutSection
            title={
              lang === "en" && paragraph3TitleEn
                ? paragraph3TitleEn
                : paragraph3TitlePl
            }
            img={paragraph3Img ? paragraph3Img.fields.file.url : "img12.jpg"}
            content={
              lang === "en" && paragraph3TextEn
                ? documentToReactComponents(paragraph3TextEn)
                : documentToReactComponents(paragraph3TextPl)
            }
          ></AboutSection>
        ) : (
          ""
        )}
        {paragraph4TitlePl || paragraph4TitleEn ? (
          <AboutSection
            isReverse
            title={
              lang === "en" && paragraph4TitleEn
                ? paragraph4TitleEn
                : paragraph4TitlePl
            }
            img={paragraph4Img ? paragraph4Img.fields.file.url : "img12.jpg"}
            content={
              lang === "en" && paragraph4TextEn
                ? documentToReactComponents(paragraph4TextEn)
                : documentToReactComponents(paragraph4TextPl)
            }
          ></AboutSection>
        ) : (
          ""
        )}

        {includeActivitiesSection && (
          <ActivitiesSection activities={activities} />
        )}
        {includeSupportSection && <SupportSection support1={support1} />}
        {includeTeamSection && <TeamSection teamMembers={teamMembers} />}
        {includeDocumentSection && <Documents content={documents} />}
      </Container>
    </div>
  );
};

export default aboutus;
