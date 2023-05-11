import Hamburger from "@/components/atoms/hamburger";
import Logo from "@/components/atoms/logo";
import Navlinks from "@/components/molecules/navlinks";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuActive(false);
  };

  return (
    <div className="w-full flex justify-between items-center px-16 pr-16 py-4 bg-white border-t-4 border-t-green-800 border-b-2 border-b-grey-100 fixed top-0 left-0 z-10">
      <Logo />
      <div className="flex items-start gap-6">
        <Navlinks isVisible={isMobileMenuActive ? true : false} />
        <Hamburger
          hasCloseIcon={isMobileMenuActive ? true : false}
          toggleMobileMenu={toggleMobileMenu}
        />
        {/* {isMobileMenuActive ? 'X': <Hamburger/> } */}
      </div>
    </div>
  );
};

export default Navbar;
