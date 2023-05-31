import React from "react";
import Container from "@/components/atoms/container";
import PageHeader from "@/components/molecules/page-header";
import Footer from "@/components/organisms/footer";
import Navbar from "@/components/organisms/navbar";
import NewsSection from "@/components/organisms/news-section";

const News = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <PageHeader>Aktualności</PageHeader>
        <div className="px-32 py-20">
          <NewsSection></NewsSection>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default News;
