import Container from "@/components/atoms/container";
import GoogleMap from "@/components/molecules/google-map";
import PageHeader from "@/components/molecules/page-header";
import AboutSection from "@/components/organisms/about-section";
import ContactSection from "@/components/organisms/contact-section";
import Navbar from "@/components/organisms/navbar";
import ArticleWithImages from "@/components/templates/article-with-images";
import RootContext from "@/context/RootContext";
import { createClient } from "contentful";
import React, { useContext } from "react";

interface ContactProps {
  contact: {
    fields: {
      titlePl: string;
      titleEn: string;
      address: string;
      phoneNumber: string;
      phoneNumber2: string;
      eMail: string;
      textFieldPl: React.ReactNode;
      textFirldEn: React.ReactNode;
      image: {
        fields: {
          file: {
            url: string;
            details: {
              image: {
                width: number;
                height: number;
              };
            };
          };
        };
      };
    };
  }[];
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "contact" });

  return {
    props: {
      contact: res.items,
    },
  };
}

const contact = ({ contact }: ContactProps) => {
  const {
    titlePl,
    titleEn,
    address,
    phoneNumber,
    phoneNumber2,
    eMail,
    textFieldPl,
    textFirldEn,
    image,
  } = contact[0].fields;

  const { lang } = useContext(RootContext);

  return (
    <div>
      <Container>
        <PageHeader>{lang === "en" ? "Contact" : "Kontakt"}</PageHeader>
        <ContactSection
          title={titlePl}
          address={address}
          phoneNumber={phoneNumber}
          phoneNumber2={phoneNumber2}
          email={eMail}
          img={image ? image : ""}
        />
      </Container>
    </div>
  );
};

export default contact;
