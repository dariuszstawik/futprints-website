import Divider from "@/components/atoms/divider";
import SectionParagraph from "@/components/atoms/section-paragraph/SectionParagraph";
import SectionTitle from "@/components/atoms/section-title";
import Image from "next/image";
import React from "react";
import Fade from "react-reveal/Fade";

interface AboutSectionProps {
  title: string;
  isReverse?: boolean;
  content: React.ReactNode;
  img?: {
    fields: {
      file: {
        url: string;
        details: {
          image: {
            width: number;
            height: number;
          };
        };
      };
    };
  };
}

const AboutSection = ({
  title,
  img,
  isReverse,
  content,
}: AboutSectionProps) => {
  return (
    <div
      className={`w-full py-16 flex flex-col lg:flex-row ${
        isReverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <Fade left>
        <div className="w-[700px] shrink-0">
          <Image
            src={img.fields?.file?.url ? "https:" + img.fields.file.url : ""}
            width={img.fields?.file?.details?.image?.width}
            height={img.fields?.file?.details?.image?.height}
            className="rounded-lg"
            alt=""
          />
        </div>
      </Fade>
      <div className={isReverse ? "ml-32 mr-16" : "ml-16 mr-32"}>
        <SectionTitle isAlignedLeft>{title}</SectionTitle>
        <Divider isLeft />
        <SectionParagraph>{content}</SectionParagraph>
      </div>
    </div>
  );
};

export default AboutSection;
