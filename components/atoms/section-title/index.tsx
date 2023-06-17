import React from "react";

interface HeaderTitleProps {
  children: React.ReactNode;
  isWhite?: boolean;
  isAlignedLeft?: boolean;
}

const SectionTitle = ({
  children,
  isWhite,
  isAlignedLeft,
}: HeaderTitleProps) => {
  return (
    <h2
      className={`text-4xl font-bold my-6 z-10 ${
        isAlignedLeft ? "text-left" : "text-center"
      } ${isWhite && "text-white"}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
