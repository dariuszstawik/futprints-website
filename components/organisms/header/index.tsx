import HeaderImg from "@/components/atoms/header-img";
import HeaderSlider from "@/components/atoms/header-slider";
import HeaderContent from "@/components/molecules/header-content";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[calc(100vh-128px)] pl-28 bg-primaryGray flex flex-col gap-10 lg:flex-row lg:justify-between">
      <HeaderContent />
      <HeaderSlider />
      {/* <HeaderImg /> */}
    </div>
  );
};

export default Header;
