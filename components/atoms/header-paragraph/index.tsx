import React from "react";

const HeaderParagraph = ({ children, isCentered }) => {
  return (
    <p
      className={
        isCentered
          ? "text-xl my-8 text-center text-neutral-600"
          : "text-xl my-8 text-neutral-600"
      }
    >
      {children}
    </p>
  );
};

export default HeaderParagraph;
