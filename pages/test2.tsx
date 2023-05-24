import Container from "@/components/atoms/container";
import ActivitiesSection from "@/components/organisms/activities-section";
import Footer from "@/components/organisms/footer";
import Header from "@/components/organisms/header";
import Navbar from "@/components/organisms/navbar";
import NewsSection from "@/components/organisms/news-section";
import SupportSection from "@/components/organisms/support-section";
import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const test2 = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Container>
          <Header />
          {/* <img src="banner.png" className="w-[700px]" /> */}
          <ActivitiesSection />
          <SupportSection />
          <NewsSection />
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default test2;
