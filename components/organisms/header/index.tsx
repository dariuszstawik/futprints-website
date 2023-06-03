import HeaderImg from "@/components/atoms/header-img";
import HeaderSlider from "@/components/atoms/header-slider";
import HeaderContent from "@/components/molecules/header-content";
import React from "react";

const Header = () => {
  return (
    <div className="w-full min-h-[calc(100vh-128px)] pl-28 bg-primaryGray flex flex-col lg:flex-row lg:justify-between">
      <HeaderContent />
      <HeaderSlider />
    </div>
  );
};

export default Header;
