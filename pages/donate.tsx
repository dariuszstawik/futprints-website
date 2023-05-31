import React from "react";
import Container from "@/components/atoms/container";
import PageHeader from "@/components/molecules/page-header";
import Footer from "@/components/organisms/footer";
import Navbar from "@/components/organisms/navbar";
import SingleArticle from "@/components/templates/single-article";

const partnership = () => {
  const title = "Darowizny";
  const lead =
    "Jako fundacja działamy non profit, utrzymujemy się głównie z darowizn od osób fizycznych oraz firm. 5, 10, 20 zł - nawet drobne wpłaty pomagają nam w pomocy potrzebującym.";
  const img = "img14.jpg";
  const content = `Jeżeli chciałbyś nas wesprzeć finansowo, możesz wykonać przelew na nasze konto:
    <p>Nr rachunku: 46 1600 1055 1842 1469 2000 0001 </p>
    <p>Bank BNP Paribas</p>
    <p>IBAN: PL46 1600 1055</p>
    <p>1842 1469 2000 0001 SWIFT: PPABPLPKXXX </p>
    <p> Dziękujemy!</p>`;

  return (
    <div>
      <Navbar />
      <Container>
        <PageHeader>Współpraca</PageHeader>
        <SingleArticle title={title} lead={lead} content={content} img={img} />
      </Container>
      <Footer />
    </div>
  );
};

export default partnership;
