import { useContext, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import RootContext from "@/context/RootContext";

interface ItemProps {
  question: string;
  children: React.ReactNode;
}

interface FaqProps {
  content: {
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
  }[];
}

const Item = ({ question, children }: ItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{question}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = ({ content }: FaqProps) => {
  const { lang } = useContext(RootContext);

  const {
    question1Pl,
    question2Pl,
    question3Pl,
    question4Pl,
    question5Pl,
    question6Pl,
    question7Pl,
    question1En,
    question2En,
    question3En,
    question4En,
    question5En,
    question6En,
    question7En,
    answer1Pl,
    answer2Pl,
    answer3Pl,
    answer4Pl,
    answer5Pl,
    answer6Pl,
    answer7Pl,
    answer1En,
    answer2En,
    answer3En,
    answer4En,
    answer5En,
    answer6En,
    answer7En,
  } = content[0].fields;

  return (
    <div className="py-6 mx-auto w-full">
      <div className="max-w-2xl sm:mx-auto lg:max-w-full">
        <div className="space-y-4">
          {question1Pl ? (
            <Item
              question={
                lang === "en" && question1En ? question1En : question1Pl
              }
            >
              {lang === "en" && answer1En
                ? documentToReactComponents(answer1En)
                : documentToReactComponents(answer1Pl)}
            </Item>
          ) : (
            ""
          )}
          {question2Pl ? (
            <Item
              question={
                lang === "en" && question2En ? question2En : question2Pl
              }
            >
              {lang === "en" && answer2En
                ? documentToReactComponents(answer2En)
                : documentToReactComponents(answer2Pl)}
            </Item>
          ) : (
            ""
          )}
          {question3Pl ? (
            <Item
              question={
                lang === "en" && question3En ? question3En : question3Pl
              }
            >
              {lang === "en" && answer3En
                ? documentToReactComponents(answer3En)
                : documentToReactComponents(answer3Pl)}
            </Item>
          ) : (
            ""
          )}
          {question4Pl ? (
            <Item
              question={
                lang === "en" && question4En ? question4En : question4Pl
              }
            >
              {lang === "en" && answer4En
                ? documentToReactComponents(answer4En)
                : documentToReactComponents(answer4Pl)}
            </Item>
          ) : (
            ""
          )}
          {question5Pl ? (
            <Item
              question={
                lang === "en" && question5En ? question5En : question5Pl
              }
            >
              {lang === "en" && answer5En
                ? documentToReactComponents(answer5En)
                : documentToReactComponents(answer5Pl)}
            </Item>
          ) : (
            ""
          )}
          {question6Pl ? (
            <Item
              question={
                lang === "en" && question6En ? question6En : question6Pl
              }
            >
              {lang === "en" && answer6En
                ? documentToReactComponents(answer6En)
                : documentToReactComponents(answer6Pl)}
            </Item>
          ) : (
            ""
          )}
          {question7Pl ? (
            <Item
              question={
                lang === "en" && question7En ? question7En : question7Pl
              }
            >
              {lang === "en" && answer7En
                ? documentToReactComponents(answer7En)
                : documentToReactComponents(answer7Pl)}
            </Item>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
