import ArrowLong from "@/components/atoms/arrow-long";
import RootContext from "@/context/RootContext";
import { ImageProps } from "@/pages";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

interface ActivitiesCardProps {
  img: ImageProps;
  title: string;
  href: string;
}

const ActivitiesCard = ({ title, img, href }: ActivitiesCardProps) => {
  const { lang } = useContext(RootContext);
  return (
    <div className="max-w-xl lg:max-w-2xl mx-auto transition duration-300 transform bg-primaryGray rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
      <div className="relative">
        <Image
          className="object-cover w-full h-48 rounded-t lg:h-96 xl:h-96"
          src={img.fields?.file?.url ? "https:" + img.fields.file.url : ""}
          width={img.fields?.file?.details?.image?.width}
          height={img.fields?.file?.details?.image?.height}
          alt=""
        />
        <div className="w-full h-6 bg-green-800" />
      </div>
      <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
        <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          {title}
        </h5>
        <Link href={href}>
          <button className="relative font-medium text-green-800 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-green-800 before:transition hover:before:scale-100">
            {lang === "en" ? "read more" : "dowiedz się więcej"}
            <ArrowLong />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ActivitiesCard;
