import ArrowLong from "@/components/atoms/arrow-long";
import React from "react";

const NewsCard = () => {
  return (
    <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
      <div className="relative">
        <img
          className="object-cover w-full h-48 rounded-t lg:h-48 xl:h-48"
          src="img1.jpg"
          alt=""
        />
        <div className="w-full h-6 bg-green-800" />
        <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
      </div>
      <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
        <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          Centrum Społecznościowe
        </h5>
        <p className="mb-5 text-gray-700">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
          perspiciatis unde.
        </p>

        {/* <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white bg-green-800 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                więcej
              </button> */}
        <button
          className="relative font-medium text-green-800 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-green-800 before:transition hover:before:scale-100"
          href="/download"
        >
          dowiedz się więcej
          <ArrowLong />
        </button>
      </div>
    </div>
    //  </div>
  );
};

export default NewsCard;
