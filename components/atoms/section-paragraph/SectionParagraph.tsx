import React, { ReactNode } from "react";

const SectionParagraph = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-base leading-6 my-4" style={{ listStyleType: "disc" }}>
      {children}
    </div>
  );
};

export default SectionParagraph;
