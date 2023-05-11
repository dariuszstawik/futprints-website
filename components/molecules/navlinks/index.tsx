import Button from "@/components/atoms/button";
import Navlink from "@/components/atoms/navlink";
import React from "react";

// const Navlinks = ({toggleMobileMenu}:{toggleMobileMenu: ()=> void}) => {
const Navlinks = ({ isVisible }) => {
  return (
    <ul
      className={
        isVisible
          ? "flex flex-col justify-start align-center gap-14 lg:flex-row my-4"
          : "flex flex-col justify-start align-center gap-14 lg:flex-row my-4 hidden lg:flex"
      }
    >
      <li>
        <Navlink>aktualności</Navlink>
      </li>
      <li>
        <Navlink>o nas</Navlink>
      </li>
      <li>
        <Navlink>chcę pomóc</Navlink>
      </li>
      <li>
        <Navlink>quiz</Navlink>
      </li>
      <li>
        <Navlink>kontakt</Navlink>
      </li>
    </ul>
  );
};

export default Navlinks;
