import Button from "@/components/atoms/button";
import Navlink from "@/components/atoms/navlink";
import Link from "next/link";
import React from "react";
import { navLinksData } from "./navlinksData";

// const Navlinks = ({toggleMobileMenu}:{toggleMobileMenu: ()=> void}) => {
const Navlinks = ({ isVisible, closeMobileMenu }) => {
  return (
    <ul
      className={
        isVisible
          ? "absolute z-40 w-full top-full left-0 bg-backgroundGray py-4 flex flex-col justify-center align-center items-center gap-14 lg:static lg:flex-row my-4"
          : "flex flex-col justify-center align-center items-center gap-14 lg:flex-row my-4 hidden lg:flex"
      }
    >
      {navLinksData.map((navlink, i) => {
        return (
          <li key={i}>
            <Link
              className="text-lg text-neutral-600"
              href={navlink.path}
              onClick={closeMobileMenu}
            >
              {navlink.content}
            </Link>
          </li>
        );
      })}

      <li className="flex flex-col justify-center align-center items-center mx-auto my-auto">
        <Button onClick={closeMobileMenu}>
          <Link href="/support"> chcę pomóc</Link>
        </Button>
      </li>
    </ul>
  );
};

export default Navlinks;
