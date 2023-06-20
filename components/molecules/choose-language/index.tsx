import RootContext from "@/context/RootContext";
import React, { useContext } from "react";
import { languagesData } from "./languagesData";

interface ChooseLanguageProps {
  isLangMenuActive: boolean;
  closeLangMenu: () => void;
}

const ChooseLanguage = ({
  isLangMenuActive,
  closeLangMenu,
}: ChooseLanguageProps) => {
  const { lang, changeLang } = useContext(RootContext);

  // const handleLangForm = (e) => {
  //   e.preventDefault();

  //   const langValue = e.target.value;

  //   changeLang(langValue);
  // };

  return (
    <div
      className={`absolute w-full top-full left-0 border rounded ${
        isLangMenuActive ? "block" : "hidden"
      }`}
    >
      <ul className="bg-primaryGray p-4 list-none">
        {languagesData.map((language, i) => {
          return (
            <li className="p-2 cursor-pointer" key={i}>
              <img
                src={language.img}
                onClick={() => {
                  changeLang(language.name);
                  closeLangMenu();
                }}
              ></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChooseLanguage;
