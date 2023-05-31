import React from "react";

interface HeaderTitleProps {
  children: React.ReactNode;
  isWhite: boolean;
}

// katalog: types / plik z interface do importu albo zostawić w tym samym pliku

const HeaderTitle = ({ children, isWhite }: HeaderTitleProps) => {
  return (
    <h1
      className={`text-5xl font-bold text-neutral-700 my-6 leading-tight tracking-tight z-10 ${
        isWhite && "text-white"
      }`}
    >
      {children}
    </h1>
  );
};

export default HeaderTitle;
