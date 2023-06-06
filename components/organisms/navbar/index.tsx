import Hamburger from "@/components/atoms/hamburger";
import Logo from "@/components/atoms/logo";
import ChooseLanguage from "@/components/molecules/choose-language";
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
    <div className="fixed w-full h-32 flex justify-between items-center px-28 py-4 bg-backgroundGray border-t-4 border-t-primary border-b-2 border-b-grey-100 top-0 left-0 z-20">
      <Logo closeMobileMenu={closeMobileMenu} />
      <div className="flex items-start gap-6">
        <Navlinks
          isVisible={isMobileMenuActive ? true : false}
          closeMobileMenu={closeMobileMenu}
        />
        <Hamburger
          hasCloseIcon={isMobileMenuActive ? true : false}
          toggleMobileMenu={toggleMobileMenu}
        />
        <ChooseLanguage />
      </div>
    </div>
  );
};

export default Navbar;
