import TitleWithDevider from "@/components/molecules/title-with-divider";
import React from "react";
import { Faq } from "../faq";

const Documents = ({ content }) => {
  const { titlePl } = content[0].fields;
  return (
    <div className="mx-64 mb-24">
      <TitleWithDevider>{titlePl}</TitleWithDevider>
      <Faq content={content}></Faq>
    </div>
  );
};

export default Documents;
