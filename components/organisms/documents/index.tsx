import TitleWithDevider from "@/components/molecules/title-with-divider";
import React, { useContext } from "react";
import { Faq } from "../faq";
import RootContext from "@/context/RootContext";

interface DocumentsProps {
  content: {
    fields: {
      titlePl: string;
      titleEn: string;
      question1Pl: string;
      question2Pl: string;
      question3Pl: string;
      question4Pl: string;
      answer1Pl: React.ReactNode;
      answer2Pl: React.ReactNode;
      answer3Pl: React.ReactNode;
      answer4Pl: React.ReactNode;
      question1En: string;
      question2En: string;
      question3En: string;
      question4En: string;
      answer1En: React.ReactNode;
      answer2En: React.ReactNode;
      answer3En: React.ReactNode;
      answer4En: React.ReactNode;
    };
  }[];
}

const Documents = ({ content }: DocumentsProps) => {
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
    <div className="mx-auto mb-24 max-w-xl">
      <TitleWithDevider>{lang === "en" ? titleEn : titlePl}</TitleWithDevider>
      <Faq content={content}></Faq>
    </div>
  );
};

export default Documents;
