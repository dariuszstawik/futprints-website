import Divider from "@/components/atoms/divider";
import SectionParagraph from "@/components/atoms/section-paragraph/SectionParagraph";
import SectionTitle from "@/components/atoms/section-title";
import React from "react";

const AboutSection = ({ title, img, isReverse, children }) => {
  return (
    <div className={`w-full py-16 flex ${isReverse ? "flex-row-reverse" : ""}`}>
      <div className="w-[700px] shrink-0">
        <img src={img} className="rounded-lg" />
      </div>
      <div className={isReverse ? "ml-32 mr-16" : "ml-16 mr-32"}>
        <SectionTitle isAlignedLeft>{title}</SectionTitle>
        <Divider isLeft />
        <SectionParagraph>{children}</SectionParagraph>
      </div>
    </div>
  );
};

export default AboutSection;
