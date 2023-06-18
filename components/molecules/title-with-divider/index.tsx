import Divider from "@/components/atoms/divider";
import SectionTitle from "@/components/atoms/section-title";
import React from "react";

interface TitleWithDeviderProps {
  children: React.ReactNode;
  isWhite?: boolean;
  isAlignedLeft?: boolean;
}

const TitleWithDevider = ({
  children,
  isWhite,
  isAlignedLeft,
}: TitleWithDeviderProps) => {
  return (
    <div className="mx-auto my-6 flex flex-col items-center">
      <SectionTitle isWhite={isWhite} isAlignedLeft={isAlignedLeft}>
        {children}
      </SectionTitle>
      <Divider isWhite={isWhite} isLeft={isAlignedLeft} />
    </div>
  );
};

export default TitleWithDevider;
