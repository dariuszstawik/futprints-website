import ArticleLead from "@/components/atoms/article-lead";
import Divider from "@/components/atoms/divider";
import SectionParagraph from "@/components/atoms/section-paragraph/SectionParagraph";
import SectionTitle from "@/components/atoms/section-title";
import TitleWithDevider from "@/components/molecules/title-with-divider";
import React from "react";

const SingleArticle = ({ title, lead, content, img }) => {
  return (
    <container>
      <div class="max-w-3xl mx-auto mt-10 mb-16">
        <TitleWithDevider>{title}</TitleWithDevider>
        <div>
          <img src={img} className="w-full object-cover rounded-lg my-10"></img>
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
