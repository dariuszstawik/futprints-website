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
  // const options: Options = {r}
  // const renderOptions = {
  //   renderNode: {
  //     [INLINES.EMBEDDED_ENTRY]: (node, children) => {
  //       // target the contentType of the EMBEDDED_ENTRY to display as you need
  //       if (node.data.target.sys.contentType.sys.id === "blogPost") {
  //         return (
  //           <a href={`/blog/${node.data.target.fields.slug}`}>
  //             {" "}
  //             {node.data.target.fields.title}
  //           </a>
  //         );
  //       }
  //     },
  //     [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
  //       // target the contentType of the EMBEDDED_ENTRY to display as you need
  //       if (node.data.target.sys.contentType.sys.id === "codeBlock") {
  //         return (
  //           <pre>
  //             <code>{node.data.target.fields.code}</code>
  //           </pre>
  //         );
  //       }

  //       if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
  //         return (
  //           <iframe
  //             src={node.data.target.fields.embedUrl}
  //             height="100%"
  //             width="100%"
  //             frameBorder="0"
  //             scrolling="no"
  //             title={node.data.target.fields.title}
  //             allowFullScreen={true}
  //           />
  //         );
  //       }
  //     },

  //     [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
  //       // render the EMBEDDED_ASSET as you need
  //       return (
  //         <img
  //           src={`https://${node.data.target.fields.file.url}`}
  //           height={node.data.target.fields.file.details.image.height}
  //           width={node.data.target.fields.file.details.image.width}
  //           alt={node.data.target.fields.description}
  //         />
  //       );
  //     },
  //   },
  // };
  return (
    <Container>
      <PageHeader>{lang === "en" ? "Partnership" : "Współpraca"}</PageHeader>
      <SingleArticle
        title={lang === "en" && titleEn ? titleEn : titlePl}
        lead={lang === "en" && leadEn ? leadEn : leadPl}
        content={
          lang === "en" && contentEn
            ? documentToReactComponents(contentEn )//as Document) // renderOptions)
            : documentToReactComponents(contentPl )
        img={image ? image : ""}
      />
    </Container>
  );
};

export default partnership;
