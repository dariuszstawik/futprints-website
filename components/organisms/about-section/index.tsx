import SectionParagraph from "@/components/atoms/section-paragraph/SectionParagraph";
import SectionTitle from "@/components/atoms/section-title";
import React from "react";

// classnames classnames('flex', isReverse && 'flex-row-reverse')
const AboutSection = ({ title, img, isReverse, children }) => {
  return (
    <div className={`w-full py-16 flex ${isReverse ? "flex-row-reverse" : ""}`}>
      {/* className={
         isReverse ? "w-full py-16 flex flex-row-reverse" : "w-full py-16 flex"
       } */}
      <div className="w-[700px] shrink-0">
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
