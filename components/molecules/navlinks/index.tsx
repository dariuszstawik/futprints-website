import Button from "@/components/atoms/button";
import Link from "next/link";
import React, { useContext } from "react";
import { navLinksData } from "./navlinksData";
import RootContext from "@/context/RootContext";

interface NavlinksProps {
  closeMobileMenu: () => void;
  isVisible: boolean;
}

const Navlinks = ({ isVisible, closeMobileMenu }: NavlinksProps) => {
  const { lang } = useContext(RootContext);
  return (
    <ul
      className={
        isVisible
          ? "list-none absolute z-40 w-full top-full left-0 bg-backgroundGray py-4 flex flex-col justify-center align-center items-center gap-14 lg:static lg:flex-row my-4"
          : "list-none flex-col justify-center align-center items-center gap-14 lg:flex-row my-4 hidden lg:flex"
      }
    >
      {navLinksData.map((navlink, i) => {
        return (
          <li key={i}>
            <Link
              className="text-sm xl:text-lg text-neutral-600"
              href={navlink.path}
              onClick={closeMobileMenu}
            >
              {lang === "en" && navlink.contentEn
                ? navlink.contentEn
                : navlink.contentPl}
            </Link>
          </li>
        );
      })}

      <li className="flex flex-col justify-center align-center items-center mx-auto my-auto">
        <Link href="/support">
          <Button onClick={closeMobileMenu}>
            {lang === "en" ? "support us" : "chcę pomóc"}
          </Button>
        </Link>
      </li>
    </ul>
  );
};

export default Navlinks;
