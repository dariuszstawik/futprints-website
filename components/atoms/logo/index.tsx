import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoProps {
  closeMobileMenu: () => void;
  isInFooter?: boolean;
}

const Logo = ({ isInFooter, closeMobileMenu }: LogoProps) => {
  return (
    <Link href="/" onClick={closeMobileMenu}>
      <img
        className="w-32 sm:w-40 mr-10"
        src={isInFooter ? "/logo-footer.svg" : "/logo.svg"}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
