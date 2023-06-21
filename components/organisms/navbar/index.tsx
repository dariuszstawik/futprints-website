import Hamburger from "@/components/atoms/hamburger";
import LangIcon from "@/components/atoms/lang-icon";
import Logo from "@/components/atoms/logo";
import ChooseLanguage from "@/components/molecules/choose-language";
import Navlinks from "@/components/molecules/navlinks";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [isLangMenuActive, setIsLangMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuActive(false);
  };

  const toggleLangMenu = () => {
    setIsLangMenuActive(!isLangMenuActive);
  };

  const closeLangMenu = () => {
    setIsLangMenuActive(false);
  };

  return (
    <div className="fixed w-full h-32 flex justify-between items-center px-16 py-4 bg-backgroundGray border-t-4 border-t-primary border-b-2 border-b-grey-100 top-0 left-0 z-20 lg:px-28">
      <Logo closeMobileMenu={closeMobileMenu} />
      <div className="flex items-center gap-6">
        <Navlinks
          isVisible={isMobileMenuActive ? true : false}
          closeMobileMenu={closeMobileMenu}
        />
        <Hamburger
          hasCloseIcon={isMobileMenuActive ? true : false}
          toggleMobileMenu={toggleMobileMenu}
        />
        <div className="relative flex flex-col bg-primaryGray border rounded">
          <LangIcon
            toggleLangMenu={toggleLangMenu}
            isLangMenuActive={isLangMenuActive}
          />
          <ChooseLanguage
            isLangMenuActive={isLangMenuActive}
            closeLangMenu={closeLangMenu}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
