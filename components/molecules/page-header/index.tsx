import HeaderTitle from "@/components/atoms/header-title";
import SectionTitle from "@/components/atoms/section-title";
import React from "react";

const PageHeader = ({ children }: { children: string }) => {
  return (
    <div
      className="relative w-full px-32 py-20 bg-primary flex after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-primary after:opacity-80"
      style={{
        backgroundImage: 'url("/img12cropped.jpg")',
        backgroundPosition: "center",
      }}
    >
      <HeaderTitle isWhite>{children}</HeaderTitle>
    </div>
  );
};

export default PageHeader;
