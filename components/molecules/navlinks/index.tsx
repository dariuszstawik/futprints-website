import Button from "@/components/atoms/button";
import Navlink from "@/components/atoms/navlink";
import Link from "next/link";
import React from "react";

// const Navlinks = ({toggleMobileMenu}:{toggleMobileMenu: ()=> void}) => {
const Navlinks = ({ isVisible }) => {
  return (
    <ul
      className={
        isVisible
          ? "flex flex-col justify-center align-center items-center gap-14 lg:flex-row my-4"
          : "flex flex-col justify-center align-center items-center gap-14 lg:flex-row my-4 hidden lg:flex"
      }
    >
      <li>
        <Link className="text-lg text-neutral-600" href="">
          aktualności
        </Link>
      </li>
      <li>
        <Link className="text-lg text-neutral-600" href="/aboutus">
          o nas
        </Link>
      </li>
      <li>
        <Link className="text-lg text-neutral-600" href="">
          quiz
        </Link>
      </li>
      <li>
        <Link className="text-lg text-neutral-600" href="">
          kontakt
        </Link>
      </li>
      <li className="flex flex-col justify-center align-center items-center mx-auto my-auto">
        <Button>chcę pomóc</Button>
      </li>
    </ul>
  );
};

export default Navlinks;
