import RootContext from "@/context/RootContext";
import React, { useContext } from "react";

const ChooseLanguage = () => {
  const { lang, changeLang } = useContext(RootContext);
  console.log(lang);

  const handleLangForm = (e) => {
    e.preventDefault();

    const langValue = e.target.value;

    changeLang(langValue);
    console.log(lang);
  };

  return (
    <form className="my-auto" onClick={handleLangForm}>
      <select name="select" defaultValue="pl">
        <option
          value="pl"
          style={{
            backgroundImage: 'url("/flagPL.svg")',
            backgroundPosition: "top",
            backgroundRepeat: "repeat",
          }}
        >
          polski
        </option>
        <option
          value="en"
          style={{
            backgroundImage: 'url("/flagGB.svg")',
            backgroundRepeat: "repeat",
          }}
        >
          english
        </option>
        <option>ukrainian</option>
      </select>
    </form>
  );
};

export default ChooseLanguage;
