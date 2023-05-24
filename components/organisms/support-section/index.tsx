import ArrowLong from "@/components/atoms/arrow-long";
import Divider from "@/components/atoms/divider";
import HeaderTitle from "@/components/atoms/header-title";
import SectionTitle from "@/components/atoms/section-title";
import SupportButton from "@/components/atoms/support-button";
import React from "react";

const SupportSection = () => {
  return (
    <div
      className="relative w-full pt-6 bg-primary flex after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-primary after:opacity-80"
      // after:content-['']
      // after:w-[500px] after:h-[460px] after:absolute after:top-0 after:left-0 after:bg-green-800 after:opacity-25

      style={{
        backgroundImage: 'url("/img14.jpg")',
        backgroundPosition: "center",
      }}
    >
      {/* <div className="w-full h-full bg-primary" /> */}
      {/* <div
        className="support__image relative w-96"
        style={{ backgroundImage: 'url("/img14.jpg")' }}
      >
        <img src="img14.jpg" />
      </div> */}
      <div className="support__content w-full px-24 pb-16 z-10">
        <div className="min-w-96 mx-auto mt-6 flex flex-col justify-center content-center items-center">
          <SectionTitle isWhite>Jak możesz pomóc</SectionTitle>
          <Divider isWhite />
          <div className="py-10 flex flex-wrap justify-between">
            <div>
              <a
                href="#"
                className="w-80 block flex flex-col items-center text-xl font-medium text-white"
              >
                <img
                  src="support-donate.svg"
                  className="w-44 mb-6 mt-12 border border-white border-4 rounded-full p-8"
                />
                wpłać <span className="block font-bold">darowiznę</span>{" "}
                <ArrowLong />
              </a>
            </div>
            <div>
              <a
                href="#"
                className="w-80 block flex flex-col items-center text-xl font-medium text-white"
              >
                <img
                  src="support-volunteer.svg"
                  className="w-44 mb-6 mt-12 border border-white border-4 rounded-full p-8"
                />
                zostań{" "}
                <span className="block font-bold">wolontariuszem/ką</span>{" "}
                <ArrowLong />
              </a>
            </div>
            <div>
              <a
                href="#"
                className="w-80 block flex flex-col items-center text-xl font-medium text-white"
              >
                <img
                  src="support-clothes.svg"
                  className="w-44 mb-6 mt-12 border border-white border-4 rounded-full p-8"
                />
                przekaż{" "}
                <span className="block font-bold">
                  ubrania lub środki czystości
                </span>{" "}
                <ArrowLong />
              </a>
            </div>
            <div>
              <a
                href="#"
                className="w-80 block flex flex-col items-center text-xl font-medium text-white"
              >
                <img
                  src="support-collect.svg"
                  className="w-44 mb-6 mt-12 border border-white border-4 rounded-full p-8"
                />
                zorganizuj <span className="block font-bold">zbiórkę</span>{" "}
                <ArrowLong />
              </a>
            </div>{" "}
          </div>
        </div>

        {/* <a
          href="#"
          className="w-[400px] mt-4 mx-auto inline-block col-start-1 col-end-2 row-start-2 row-end-3 grow-0 rounded border border-backgroundGray bg-transparent px-12 py-3 flex items-center text-xl font-medium text-white hover:bg-transparent hover:text-green-880 focus:outline-none focus:ring active:text-green-600"
        >
          {" "}
          <img src="support-donate.svg" className="w-16 inline-block mr-4" />
          wpłać darowiznę
        </a>
        <a
          href="#"
          className="w-[400px] mt-4 mx-auto inline-block col-start-2 col-end-3 row-start-2 row-end-3 rounded border border-green-800 bg-green-800 px-12 py-3 flex items-center text-xl font-medium text-white hover:bg-transparent hover:text-green-800 focus:outline-none focus:ring active:text-green-600"
        >
          {" "}
          <img src="support-volunteer.svg" className="w-16 inline-block mr-4" />
          zostań wolontariuszem/ką
        </a>

        <a
          href="#"
          className="w-[400px] mt-4 mx-auto inline-block col-start-1 col-end-2 row-start-3 row-end-4 rounded border border-green-800 bg-green-800 px-12 py-3 flex items-center text-xl font-medium text-white hover:bg-transparent hover:text-green-800 focus:outline-none focus:ring active:text-green-600"
        >
          {" "}
          <img src="support-clothes.svg" className="w-16 inline-block mr-4" />
          podaruj ubrania lub środki czystości
        </a>

        <a
          href="#"
          className="w-[400px] mt-4 mx-auto inline-block col-start-2 col-end-3 row-start-3 row-end-4 rounded border border-green-800 bg-green-800 px-12 py-3 flex items-center text-xl font-medium text-white hover:bg-transparent hover:text-green-800 focus:outline-none focus:ring active:text-green-600"
        >
          {" "}
          <img src="support-volunteer.svg" className="w-16 inline-block mr-4" />
          zorganizuj zbiórkę
        </a> */}
      </div>
    </div>
  );
};

export default SupportSection;
