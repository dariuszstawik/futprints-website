import Container from "@/components/atoms/container";
import GoogleMap from "@/components/molecules/google-map";
import PageHeader from "@/components/molecules/page-header";
import AboutSection from "@/components/organisms/about-section";
import Navbar from "@/components/organisms/navbar";
import React from "react";

const contact = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <PageHeader>Kontakt</PageHeader>
        <AboutSection title="Kim jesteśmy?" img="map-kordeckiego.jpg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          ut quo quidem et impedit, dolor iure placeat quae nesciunt, temporibus
          eaque distinctio culpa fugiat vel vitae dolore quam qui non? Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Nisi, libero earum
          cum reiciendis animi tenetur debitis inventore doloremque ut fugit
          adipisci accusamus? Corrupti, eius nisi doloribus esse consequatur ut
          eos. Lorem ipsum dolor.
        </AboutSection>
        <GoogleMap />
      </Container>
    </div>
  );
};

export default contact;
