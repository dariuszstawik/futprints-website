import React from "react";

const ChooseLanguage = () => {
  return (
    <form>
      <select>
        <option
          style={{
            backgroundImage: 'url("/flagPL.svg")',
            backgroundPosition: "top",
          }}
        ></option>
        <option
          style={{
            backgroundImage: 'url("/flagGB.svg")',
            backgroundPosition: "top",
          }}
        ></option>
        <option>ukrainian</option>
        <option></option>
        <option></option>
      </select>
    </form>
  );
};

export default ChooseLanguage;
