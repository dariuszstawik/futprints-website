import ArticleLead from "@/components/atoms/article-lead";
import Divider from "@/components/atoms/divider";
import SectionParagraph from "@/components/atoms/section-paragraph/SectionParagraph";
import SectionTitle from "@/components/atoms/section-title";
import TitleWithDevider from "@/components/molecules/title-with-divider";
import React from "react";

const SingleArticle = ({ title, lead, content, img, hasIcon }) => {
  return (
    <container>
      <div className="max-w-3xl mx-auto mt-10 mb-16">
        <TitleWithDevider>{title}</TitleWithDevider>
        <div>
          {hasIcon ? (
            <div className="my-10 bg-primary flex justify-center items-center relative w-full py-12 border rounded-lg flex ">
              <img
                src={img}
                className={
                  hasIcon
                    ? "w-44 border border-white border-4 rounded-full p-8 z-10"
                    : "w-full object-cover rounded-lg my-10"
                }
              ></img>
            </div>
          ) : (
            <img
              src={img}
              className="w-full object-cover rounded-lg my-10"
            ></img>
          )}
        </div>
        <div>
          <ArticleLead>{lead}</ArticleLead>
          <div className="text-base leading-6 my-4"></div>
          {content}
        </div>
      </div>
    </container>
  );
};

export default SingleArticle;
