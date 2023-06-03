import AddressIcon from "@/components/atoms/address-icon";
import Divider from "@/components/atoms/divider";
import EmailIcon from "@/components/atoms/email-icon";
import PhoneIcon from "@/components/atoms/phone-icon";
import SectionTitle from "@/components/atoms/section-title";
import React from "react";

const ContactSection = ({
  title,
  address,
  phoneNumber,
  phoneNumber2,
  email,
  img,
}) => {
  return (
    <div className={"w-full py-16 flex"}>
      <div className="w-[700px] shrink-0">
        <img src={img} className="rounded-lg" />
      </div>
      <div className="ml-16 mr-32">
        <SectionTitle isAlignedLeft>{title}</SectionTitle>
        <Divider isLeft />
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
          {/* <SectionParagraph>{content}</SectionParagraph> */}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
