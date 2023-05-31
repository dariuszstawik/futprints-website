import Divider from "@/components/atoms/divider";
import SectionParagraph from "@/components/atoms/section-paragraph/SectionParagraph";
import SectionTitle from "@/components/atoms/section-title";
import React from "react";

const SupportDetails = ({ title, img, children, isReverse }) => {
  return (
    <div className={`w-full py-16 flex ${isReverse ? "flex-row-reverse" : ""}`}>
      <div
        className="relative w-[700px] shrink-0 border rounded-xl flex justify-center items-center after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-primary after:opacity-80 after:border after:rounded-xl"
        style={{
          backgroundImage: 'url("/img14.jpg")',
          backgroundPosition: "center",
        }}
      >
        <div>
          <img
            src={img}
            className="w-48 border border-white border-4 rounded-full z-10"
          />
        </div>
      </div>
      <div className={isReverse ? "ml-32 mr-16" : "ml-16 mr-32"}>
        <SectionTitle isAlignedLeft>{title}</SectionTitle>
        <Divider isLeft />
        <SectionParagraph>{children}</SectionParagraph>
      </div>
    </div>
  );
};

export default SupportDetails;
