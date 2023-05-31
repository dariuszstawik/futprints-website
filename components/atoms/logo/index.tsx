import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ isInFooter, closeMobileMenu }) => {
  return (
    <Link href="./" onClick={closeMobileMenu}>
      <img
        className="w-32 sm:w-40"
        src={isInFooter ? "logo-footer.svg" : "logo.svg"}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
