import RootContext from "@/context/RootContext";
import React, { useContext } from "react";
import DropdownIcon from "../dropdown-icon";

const LangIcon = ({ toggleLangMenu, isLangMenuActive }) => {
  const { lang } = useContext(RootContext);

  let flagSrc;

  if (lang === "pl") {
    flagSrc = "flagPL.svg";
  } else if (lang === "en") {
    flagSrc = "flagGB.svg";
  } else {
    flagSrc = "flagUA.svg";
  }

  return (
    <div className="relative">
      <div className="w-20 flex gap-4 my-auto px-4 py-4 bg-primaryGray ">
        <img className="inline-block" src={flagSrc} alt="Flag" />
        <DropdownIcon toggleLangMenu={toggleLangMenu} />
      </div>
    </div>
  );
};

export default LangIcon;
