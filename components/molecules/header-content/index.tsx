import Button from "@/components/atoms/button";
import Divider from "@/components/atoms/divider";
import HeaderParagraph from "@/components/atoms/header-paragraph";
import HeaderTitle from "@/components/atoms/header-title";
import RootContext from "@/context/RootContext";
import Link from "next/link";
import React, { useContext } from "react";

const HeaderContent = ({ title, title2Line, description }) => {
  const { lang } = useContext(RootContext);
  return (
    <div className="w-full lg:w-5/12 my-auto pb-8 pr-6">
      <HeaderTitle>
        <span className="block text-primary">{title} </span>{" "}
        <span className="leading-relaxed text-primary">{title2Line}</span>
      </HeaderTitle>
      <Divider />
      <HeaderParagraph> {description}</HeaderParagraph>
      <Button>
        <Link href="/aboutus">
          {" "}
          {lang === "en" ? "Get to know us" : "Poznaj nas"}
        </Link>
      </Button>

      <div></div>
    </div>
  );
};

export default HeaderContent;
