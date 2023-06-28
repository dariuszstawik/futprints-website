import React, { useContext } from "react";
import Container from "@/components/atoms/container";
import PageHeader from "@/components/molecules/page-header";
import SingleArticle from "@/components/templates/single-article";
import { createClient } from "contentful";
import {
  Options,
  documentToReactComponents,
} from "@contentful/rich-text-react-renderer";
import RootContext from "@/context/RootContext";
import { IPartnershipFields } from "@/@types/generated/contentful";
// import { Document } from "@contentful/rich-text-react-renderer"; // Import Document from rich-text-react-renderer

interface PartnershipProps {
  partnership: {
    fields: IPartnershipFields;
    // fields: {
    //   titlePl: string;
    //   titleEn: string;
    //   leadPl: string;
    //   leadEn: string;
    //   contentPl: Document | undefined;
    //   contentEn: Document | undefined;
    //   image: {
    //     fields: {
    //       file: {
    //         url: string;
    //         details: {
    //           image: {
    //             width: number;
    //             height: number;
    //           };
    //         };
    //       };
    //     };
    //   };
    // };
  }[];
}

export async function getStaticProps() {
  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_KEY) {
    throw Error("Env variable error");
  }
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "partnership" });

  return {
    props: {
      partnership: res.items,
    },
  };
}

const partnership = ({ partnership }: PartnershipProps) => {
  const {
    titlePl,
    titleEn,
    leadPl = "",
    leadEn,
    contentPl,
    contentEn,
    image,
  } = partnership[0].fields;

  const { lang } = useContext(RootContext);

  return (
    <Container>
      <PageHeader>{lang === "en" ? "Partnership" : "Współpraca"}</PageHeader>
      <SingleArticle
        title={lang === "en" && titleEn ? titleEn : titlePl}
        lead={lang === "en" && leadEn ? leadEn : leadPl}
        content={
          lang === "en" && contentEn
            ? documentToReactComponents(contentEn) //as Document) // renderOptions)
            : documentToReactComponents(contentPl)
        }
        img={image ? image : ""}
      />
    </Container>
  );
};

export default partnership;
