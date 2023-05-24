import ArrowLong from "@/components/atoms/arrow-long";
import React from "react";

interface ActivitiesCardProps {
  img: React.ReactNode;
  title: string;
}

const ActivitiesCard = ({ title, img }: ActivitiesCardProps) => {
  return (
    <div className="transition duration-300 transform bg-primaryGray rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
      <div className="relative">
        <img
          className="object-cover w-full h-48 rounded-t lg:h-96 xl:h-96"
          src={img}
          alt=""
        />
        <div className="w-full h-6 bg-green-800" />
        {/* <div className="absolute inset-0 bg-primary bg-opacity-25" /> */}
      </div>
      <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
        <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          {title}
        </h5>
        <button
          className="relative font-medium text-green-800 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-green-800 before:transition hover:before:scale-100"
          href="/download"
        >
          dowiedz się więcej
          <ArrowLong />
        </button>
      </div>
    </div>
  );
};

export default ActivitiesCard;
