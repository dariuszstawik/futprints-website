import Hamburger from "@/components/atoms/hamburger";
import Logo from "@/components/atoms/logo";
import Navlinks from "@/components/molecules/navlinks";
import React from "react";

const Navbar = () => {
  return (

<div className="flex justify-between px-16 pr-16 my-4">
<Logo/>
<div className="flex items-start gap-6">
<Navlinks/>
<Hamburger/>
</div>
</div>
  )
}

export default Navbar;