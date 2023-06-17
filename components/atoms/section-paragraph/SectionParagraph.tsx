import React, { ReactNode } from "react";

const SectionParagraph = ({ children }: { children: ReactNode }) => {
  return <div className="text-base leading-6 my-4">{children}</div>;
};

export default SectionParagraph;
