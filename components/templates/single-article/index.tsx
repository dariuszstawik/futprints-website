import ArticleLead from "@/components/atoms/article-lead";
import ImageGallery from "@/components/molecules/image-gallery";
import TitleWithDevider from "@/components/molecules/title-with-divider";
import { Asset } from "contentful";
import Image from "next/image";
import React, { ReactNode } from "react";

interface SingleArticleProps {
  title: string;
  lead: string;
  hasIcon?: boolean;
  content: ReactNode;
  gallery?: Asset[];
  img?: {
    fields: {
      description?: string;
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

const SingleArticle = ({
  title,
  lead,
  content,
  img,
  gallery,
  hasIcon,
}: SingleArticleProps) => {
  return (
    <div className="max-w-3xl mx-auto px-8 mt-10 mb-16">
      <TitleWithDevider>{title}</TitleWithDevider>
      <div>
        {hasIcon ? (
          <div className="my-10 bg-primary flex justify-center items-center relative w-full py-12 border rounded-lg">
            <Image
              src={img?.fields?.file?.url ? "https:" + img.fields.file.url : ""}
              width={img?.fields?.file?.details?.image?.width}
              height={img?.fields?.file?.details?.image?.height}
              className="w-44 border-white border-4 rounded-full p-8 z-10"
              alt=""
            />
          </div>
        ) : (
          <Image
            src={img?.fields?.file?.url ? "https:" + img.fields.file.url : ""}
            width={img?.fields?.file?.details?.image?.width}
            height={img?.fields?.file?.details?.image?.height}
            className="w-full object-cover rounded-lg my-10"
            alt={img?.fields?.description ? img.fields.description : ""}
          />
        )}
      </div>
      <div>
        <ArticleLead>{lead}</ArticleLead>
        <div className="text-base leading-6 my-4"></div>
        {content}
      </div>
      {gallery && <ImageGallery gallery={gallery} />}
    </div>
  );
};

export default SingleArticle;
