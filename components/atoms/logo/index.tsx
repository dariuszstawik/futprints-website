import Image from "next/image";
import React from "react";

const Logo = ({ isInFooter }: boolean) => {
  return (
    <img
      className="w-40"
      src={isInFooter ? "logo-footer.svg" : "logo.svg"}
      alt="logo"
    />
  );
};

export default Logo;
