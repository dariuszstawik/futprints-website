import SectionParagraph from "@/components/atoms/section-paragraph/SectionParagraph";
import SectionTitle from "@/components/atoms/section-title";
import React from "react";

const AboutSection = ({ title, img, isReverse, children }) => {
  return (
    <div
      className={
        isReverse ? "w-full py-16 flex flex-row-reverse" : "w-full py-16 flex"
      }
    >
      <div className="w-[800px]">
        <img src={img} />
      </div>
      <div className="mr-16 ml-8">
        <SectionTitle>{title}</SectionTitle>
        <SectionParagraph>{children}</SectionParagraph>
        {children}
      </div>
    </div>
  );
};

export default AboutSection;
