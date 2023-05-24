import React from "react";

interface HeaderTitleProps {
  children: React.ReactNode;
  isWhite: boolean;
}

// katalog: types / plik z interface do importu albo zostawić w tym samym pliku

const SectionTitle = ({ children, isWhite }: HeaderTitleProps) => {
  return (
    <h2 className={`text-4xl font-bold my-6 ${isWhite && "text-white"}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;
