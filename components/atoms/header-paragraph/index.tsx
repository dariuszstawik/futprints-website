import React from "react";

interface HeaderParagraphProps {
  children: string;
  isCentered?: boolean;
}

const HeaderParagraph = ({ children, isCentered }: HeaderParagraphProps) => {
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
