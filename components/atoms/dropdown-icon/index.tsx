import React from "react";

const DropdownIcon = ({ toggleLangMenu }) => {
  return (
    <svg
      onClick={toggleLangMenu}
      className="inline-block mt-1 cursor-pointer"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      ariaHidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      ></path>
    </svg>
  );
};

export default DropdownIcon;
