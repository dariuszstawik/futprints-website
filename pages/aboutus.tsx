import Container from "@/components/atoms/container";
import PageHeader from "@/components/molecules/page-header";
import AboutSection from "@/components/organisms/about-section";
import ActivitiesSection from "@/components/organisms/activities-section";
import { Documents } from "@/components/organisms/documents";
import Footer from "@/components/organisms/footer";
import Navbar from "@/components/organisms/navbar";
import SupportSection from "@/components/organisms/support-section";
import TeamSection from "@/components/organisms/team-section";
import React from "react";

const aboutus = () => {
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
        <ActivitiesSection />
        <SupportSection />
        <TeamSection></TeamSection>
        <Documents />
      </Container>
    </div>
  );
};

export default aboutus;
