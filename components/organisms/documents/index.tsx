import TitleWithDevider from "@/components/molecules/title-with-divider";
import React, { useContext } from "react";
import { Faq } from "../faq";
import RootContext from "@/context/RootContext";

const Documents = ({ content }) => {
  const {
    titlePl,
    titleEn,
    question1Pl,
    question2Pl,
    question3Pl,
    question4Pl,
    answer1Pl,
    answer2Pl,
    answer3Pl,
    answer4Pl,
    question1En,
    question2En,
    question3En,
    question4En,
    answer1En,
    answer2En,
    answer3En,
    answer4En,
  } = content[0].fields;
  const { lang } = useContext(RootContext);
  return (
    <div className="mx-64 mb-24">
      <TitleWithDevider>{lang === "en" ? titleEn : titlePl}</TitleWithDevider>
      <Faq content={content}></Faq>
    </div>
  );
};

export default Documents;
