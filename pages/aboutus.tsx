import Container from "@/components/atoms/container";
import PageHeader from "@/components/molecules/page-header";
import AboutSection from "@/components/organisms/about-section";
import ActivitiesSection from "@/components/organisms/activities-section";
import Documents from "@/components/organisms/documents";
import SupportSection from "@/components/organisms/support-section";
import TeamSection from "@/components/organisms/team-section";
import { createClient } from "contentful";
import React from "react";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "activities" });
  const res2 = await client.getEntries({ content_type: "support1" });
  const res3 = await client.getEntries({ content_type: "teamMembers" });
  const res4 = await client.getEntries({ content_type: "documents" });

  return {
    props: {
      activities: res.items,
      support1: res2.items,
      teamMembers: res3.items,
      documents: res4.items,
    },
  };
}

const aboutus = ({ activities, support1, teamMembers, documents }) => {
  const content1 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut quo quidem et impedit, dolor iure placeat quae nesciunt, temporibus eaque distinctio culpa fugiat vel vitae dolore quam qui non? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, libero earum cum reiciendis animi tenetur debitis inventore doloremque ut fugit adipisci accusamus? Corrupti, eius nisi doloribus esse consequatur ut eos. Lorem ipsum dolor.";

  const content2 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut quo quidem et impedit, dolor iure placeat quae nesciunt, temporibus eaque distinctio culpa fugiat vel vitae dolore quam qui non? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, libero earum cum reiciendis animi tenetur debitis inventore doloremque ut fugit adipisci accusamus? Corrupti, eius nisi doloribus esse consequatur ut eos. Lorem ipsum dolor.";

  return (
    <div className="relative">
      <Container>
        <PageHeader>O nas</PageHeader>
        <AboutSection
          title="Kim jesteśmy?"
          img="img12.jpg"
          content={content1}
        ></AboutSection>

        <AboutSection
          title="Co robimy"
          img="pomaganie4.jpg"
          isReverse
          content={content2}
        ></AboutSection>
        <ActivitiesSection activities={activities} />
        <SupportSection support1={support1} />
        <TeamSection teamMembers={teamMembers}></TeamSection>
        <Documents content={documents} />
      </Container>
    </div>
  );
};

export default aboutus;
