import Container from "@/components/atoms/container";
import PageHeader from "@/components/molecules/page-header";
import ContactSection from "@/components/organisms/contact-section";
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
        description?: string;
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
  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_KEY) {
    throw Error("Env variable error");
  }
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "contact" });

  return {
    props: {
      contact: res.items,
    },
    revalidate: 10,
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
