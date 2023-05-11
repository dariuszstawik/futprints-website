import Container from "@/components/atoms/container";
import PageHeader from "@/components/molecules/page-header";
import AboutSection from "@/components/organisms/about-section";
import Footer from "@/components/organisms/footer";
import Navbar from "@/components/organisms/navbar";
import React from "react";

const aboutus = () => {
  return (
    <div className="relative">
      <Navbar />
      <Container>
        <PageHeader>O nas</PageHeader>
        <AboutSection title="Kim jesteśmy?" img="pomaganie6.jpg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          ut quo quidem et impedit, dolor iure placeat quae nesciunt, temporibus
          eaque distinctio culpa fugiat vel vitae dolore quam qui non? Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Nisi, libero earum
          cum reiciendis animi tenetur debitis inventore doloremque ut fugit
          adipisci accusamus? Corrupti, eius nisi doloribus esse consequatur ut
          eos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          saepe iure, veritatis quaerat, laudantium blanditiis quis reiciendis
          placeat officiis consectetur, dignissimos quam! Quos odit optio unde
          voluptatum veritatis est facilis?
        </AboutSection>
      </Container>
      <Footer />
    </div>
  );
};

export default aboutus;
