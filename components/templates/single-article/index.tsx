import ArticleLead from "@/components/atoms/article-lead";
import Container from "@/components/atoms/container";
import Divider from "@/components/atoms/divider";
import SectionParagraph from "@/components/atoms/section-paragraph/SectionParagraph";
import SectionTitle from "@/components/atoms/section-title";
import TitleWithDevider from "@/components/molecules/title-with-divider";
import Image from "next/image";
import React, { ReactNode } from "react";

interface SingleArticleProps {
  title: string;
  lead: string;
  img: string;
  hasIcon: boolean;
  content: ReactNode;
}

const SingleArticle = ({
  title,
  lead,
  content,
  img,
  hasIcon,
}: SingleArticleProps) => {
  console.log("wyświetlam w SingleArticle https:" + img.fields.file.url);

  return (
    <div className="max-w-3xl mx-auto px-8 mt-10 mb-16">
      <TitleWithDevider>{title}</TitleWithDevider>
      <div>
        {hasIcon ? (
          <div className="my-10 bg-primary flex justify-center items-center relative w-full py-12 border rounded-lg">
            <Image
              src={img.fields?.file?.url ? "https:" + img.fields.file.url : ""}
              width={img.fields?.file?.details?.image?.width}
              height={img.fields?.file?.details?.image?.height}
              className={
                hasIcon
                  ? "w-44 border-white border-4 rounded-full p-8 z-10"
                  : "w-full object-cover rounded-lg my-10"
              }
            />
          </div>
        ) : (
          <Image
            src={img.fields?.file?.url ? "https:" + img.fields.file.url : ""}
            width={img.fields?.file?.details?.image?.width}
            height={img.fields?.file?.details?.image?.height}
            className={
              hasIcon
                ? "w-44 border-white border-4 rounded-full p-8 z-10"
                : "w-full object-cover rounded-lg my-10"
            }
          />
        )}
      </div>
      <div>
        <ArticleLead>{lead}</ArticleLead>
        <div className="text-base leading-6 my-4"></div>
        {content}
      </div>
    </div>
  );
};

export default SingleArticle;
