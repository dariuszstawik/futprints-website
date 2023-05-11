import React from "react";

const Button = ({ isOrange, children }) => {
  return (
    <a
      class={
        isOrange
          ? "inline-block mb-6 mr-6 px-12 py-3 text-sm font-medium text-white bg-amber-600 border border-green-800 rounded active:text-green-800 hover:bg-transparent hover:text-green-800 focus:outline-none focus:ring"
          : "inline-block mb-6 mr-6 px-12 py-3 text-sm font-medium text-white bg-green-800 border border-green-800 rounded active:text-green-800 hover:bg-transparent hover:text-green-800 focus:outline-none focus:ring"
      }
      href="/"
    >
      {children}
    </a>
  );
};

export default Button;
