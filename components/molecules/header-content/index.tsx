import Button from "@/components/atoms/button";
import Divider from "@/components/atoms/divider";
import HeaderParagraph from "@/components/atoms/header-paragraph";
import HeaderTitle from "@/components/atoms/header-title";
import React from "react";

const HeaderContent = () => {
  return (
    // <div className="col-start-1 col-end-2">
    <div className="max-w-[500px] my-auto pb-8">
      {/* <HeaderParagraph>Fundacja Futprints</HeaderParagraph> */}
      {/* <p className="text-green-800 text-xl">Fundacja Futprints</p> */}
      <HeaderTitle>
        <span className="block text-primary">Wspieramy osoby</span>{" "}
        <span className="leading-relaxed text-primary">w kryzysie</span>
      </HeaderTitle>
      <Divider />
      <HeaderParagraph>
        Wspieramy osoby w kryzysie bezdomności: doradzamy, pomagamy w
        załatwianiu spraw urzędowych, rozdajemy kanapki na ulicach. Nasze
        działania są jednak szersze: organizujemy wydarzenia integracyjne dla
        społeczności lokalnej, w tym dla cudzoziemców. Działąmy w Katowicach.
      </HeaderParagraph>
      <Button>Poznaj nas</Button>
      {/* <Button isWhite>Informacje dla osób bezdomych w Katowicach</Button> */}
      <div></div>
    </div>
  );
};

export default HeaderContent;
