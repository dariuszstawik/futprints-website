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
      {/* <li>
        <button className="p-1 text-white bg-green-600 rounded">
          chcę pomóc{" "}
        </button>
      </li> */}
      {/* <li>
        <button className="p-1 text-white bg-green-600 rounded">
          szukam pomocy
        </button>
      </li> */}
      <li>
        <Navlink>aktualności</Navlink>
      </li>
      <li>
        <Link href="/aboutus">o nas</Link>
      </li>
      {/* <li>
        <Navlink>chcę pomóc</Navlink>
      </li> */}

      <li>
        <Navlink>quiz</Navlink>
      </li>
      <li>
        <Navlink>kontakt</Navlink>
      </li>
      <li className="flex flex-col justify-center align-center items-center mx-auto my-auto">
        <Button>chcę pomóc</Button>
      </li>
    </ul>
  );
};

export default Navlinks;
