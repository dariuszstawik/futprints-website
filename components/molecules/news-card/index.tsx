import ArrowLong from "@/components/atoms/arrow-long";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

const NewsCard = ({ title, content, slug }) => {
  return (
    // <div className="max-w-sm mx-auto transition duration-300 transform bg-primaryGray rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
    //   <div className="relative">
    //     <img
    //       className="object-cover w-full h-48 rounded-t lg:h-48 xl:h-48"
    //       src="img1.jpg"
    //       alt=""
    //     />
    //     <div className="w-full h-6 bg-green-800" />
    //     <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
    //   </div>
    //   <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
    //     <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
    //       Centrum Społecznościowe
    //     </h5>
    //     <p className="mb-5 text-gray-700">
    //       Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    //       accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
    //       perspiciatis unde.
    //     </p>

    //     <button
    //       className="relative font-medium text-green-800 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-green-800 before:transition hover:before:scale-100"
    //       href="/download"
    //     >
    //       dowiedz się więcej
    //       <ArrowLong />
    //     </button>
    //   </div>
    // </div>

    <div className="max-w-xl mx-auto transition duration-300 transform bg-primaryGray rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center flex">
      <div className=" grow relative w-96">
        <img
          className="object-cover h-48 rounded-t lg:h-48 xl:h-56"
          src="img1.jpg"
          alt=""
        />
        <div className=" h-6 bg-green-800" />
        <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
      </div>
      <div className="flex flex-col justify-start items-start px-6 py-8 border border-t-0 rounded-b sm:px-8 shrink">
        <h5 className="mb-2 text-xl text-left font-bold leading-none sm:text-2xl">
          {title}
        </h5>
        <div className="mb-5 text-gray-700 text-left">{content}</div>

        <button className="relative font-medium text-green-800 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-green-800 before:transition hover:before:scale-100">
          {" "}
          <Link href={`/news/${slug}`}>
            dowiedz się więcej
            <ArrowLong />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
