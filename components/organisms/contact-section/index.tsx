import AddressIcon from "@/components/atoms/address-icon";
import Divider from "@/components/atoms/divider";
import EmailIcon from "@/components/atoms/email-icon";
import PhoneIcon from "@/components/atoms/phone-icon";
import SectionTitle from "@/components/atoms/section-title";
import Image from "next/image";
import React from "react";
import Iframe from "react-iframe";
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
          {/* <Image
            src={"https:" + img.fields.file.url}
            width={img.fields.file.details.image.width}
            height={img.fields.file.details.image.height}
            className="rounded-lg"
            alt={img.fields.description ? img.fields.description : ""}
          /> */}

          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.860781576048!2d19.013150176877947!3d50.25718440126027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce47ae599e8f%3A0x95e9fbf20a480b7e!2sAugustyna%20Kordeckiego%205%2C%2040-000%20Katowice!5e0!3m2!1spl!2spl!4v1692876190439!5m2!1spl!2spl"
            width="640px"
            height="420px"
            id=""
            className="border rounded-lg"
            display="block"
            position="relative"
          />
        </div>
      </Fade>
      <div className="ml-16 mr-16">
        <SectionTitle isAlignedLeft>{title}</SectionTitle>
        <Divider />
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
