import React from "react";
import ArrowLong from "../arrow-long";

const Button = ({ isWhite, children }) => {
  return (
    <a
      class={
        isWhite
          ? "inline-block px-12 py-3 text-sm font-medium text-green-800 bg-white border border-green-800 rounded active:text-green-800 hover:bg-transparent hover:text-green-800 focus:outline-none focus:ring"
          : "inline-block px-5 py-2 font-medium text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary focus:fing"
      }
      href="/"
    >
      {children} <ArrowLong />
    </a>
  );
};

export default Button;
