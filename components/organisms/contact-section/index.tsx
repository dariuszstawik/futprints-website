import AddressIcon from "@/components/atoms/address-icon";
import Divider from "@/components/atoms/divider";
import EmailIcon from "@/components/atoms/email-icon";
import PhoneIcon from "@/components/atoms/phone-icon";
import SectionTitle from "@/components/atoms/section-title";
import Image from "next/image";
import React from "react";
const Fade = require("react-reveal/Fade");

interface ContactSectionProps {
  title: string;
  address: string;
  phoneNumber: string;
  phoneNumber2: string;
  email: string;
  img: {
    fields: {
      description?: string;
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
}

const ContactSection = ({
  title,
  address,
  phoneNumber,
  phoneNumber2,
  email,
  img,
}: ContactSectionProps) => {
  return (
    <div className={"w-full py-16 flex flex-col xl:flex-row"}>
      <Fade left>
        <div className="w-[700px] shrink-0">
          <Image
            src={"https:" + img.fields.file.url}
            width={img.fields.file.details.image.width}
            height={img.fields.file.details.image.height}
            className="rounded-lg"
            alt={img.fields.description ? img.fields.description : ""}
          />
        </div>
      </Fade>
      <div className="ml-16 mr-16">
        <SectionTitle isAlignedLeft>{title}</SectionTitle>
        <Divider/>
        <div className="flex flex-col gap-4 my-6">
          <p>
            <AddressIcon />
            {address}
          </p>
          <p>
            <PhoneIcon />
            {phoneNumber}
          </p>
          <p>
            <PhoneIcon />
            {phoneNumber2}
          </p>
          <p>
            <EmailIcon />
            {email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
