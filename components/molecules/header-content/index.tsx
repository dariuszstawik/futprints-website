import Button from "@/components/atoms/button";
import Divider from "@/components/atoms/divider";
import HeaderParagraph from "@/components/atoms/header-paragraph";
import HeaderTitle from "@/components/atoms/header-title";
import React from "react";

const HeaderContent = () => {
  return (
    <div className="w-full lg:w-5/12 my-auto pb-8 pr-6">
      <HeaderTitle>
        <span className="block text-primary">Wspieramy osoby</span>{" "}
        <span className="leading-relaxed text-primary">w kryzysie</span>
      </HeaderTitle>
      <Divider />
      <HeaderParagraph>
        Wspieramy osoby w kryzysie bezdomności: doradzamy, pomagamy w
        załatwianiu spraw urzędowych, rozdajemy posiłki na ulicach. Udzielamy
        się w społecznościach lokalnych: organizujemy pikniki, spotkania i
        warsztaty, również dla cudzoziemców. Działamy w Katowicach.
      </HeaderParagraph>
      <Button>Poznaj nas</Button>

      <div></div>
    </div>
  );
};

export default HeaderContent;
