import Button from "@/components/atoms/button";
import Navlink from "@/components/atoms/navlink";
import Link from "next/link";
import React from "react";

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
      <li>
        <Link
          className="text-lg text-neutral-600"
          href="/news"
          onClick={closeMobileMenu}
        >
          aktualności
        </Link>
      </li>
      <li>
        <Link
          className="text-lg text-neutral-600"
          href="/aboutus"
          onClick={closeMobileMenu}
        >
          o nas
        </Link>
      </li>
      <li>
        <Link
          className="text-lg text-neutral-600"
          href="/partnership"
          onClick={closeMobileMenu}
        >
          współpraca
        </Link>
      </li>
      <li>
        <Link
          className="text-lg text-neutral-600"
          href="/contact"
          onClick={closeMobileMenu}
        >
          kontakt
        </Link>
      </li>
      <li className="flex flex-col justify-center align-center items-center mx-auto my-auto">
        {/* <Link href="#SupportSection"> */}
        <Link href="/support">
          {" "}
          <Button onClick={closeMobileMenu}>chcę pomóc</Button>
        </Link>
      </li>
    </ul>
  );
};

export default Navlinks;
