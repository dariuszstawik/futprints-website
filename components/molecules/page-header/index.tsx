import SectionTitle from "@/components/atoms/section-title";
import React from "react";

const PageHeader = ({ children }) => {
  return (
    <div className="w-full px-20 py-8 bg-gray-200">
      <SectionTitle>{children}</SectionTitle>
    </div>
  );
};

export default PageHeader;
