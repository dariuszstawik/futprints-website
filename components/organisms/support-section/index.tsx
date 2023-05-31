import ArrowLong from "@/components/atoms/arrow-long";
import Divider from "@/components/atoms/divider";
import HeaderTitle from "@/components/atoms/header-title";
import SectionTitle from "@/components/atoms/section-title";
import SupportButton from "@/components/atoms/support-button";
import React from "react";
import Slide from "react-reveal/Slide";

const SupportSection = () => {
  return (
    <div
      className="relative w-full pt-6 bg-primary flex after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-primary after:opacity-80"
      style={{
        backgroundImage: 'url("/img14.jpg")',
        backgroundPosition: "center",
      }}
      id="SupportSection"
    >
      <div className="support__content w-full px-24 pb-16 z-10">
        <div className=" mx-auto mt-6 flex flex-col justify-center content-center items-center">
          <SectionTitle isWhite>Jak możesz pomóc</SectionTitle>
          <Divider isWhite />
          <Slide bottom>
            <div className="py-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <div>
                <a
                  href="#"
                  className="w-80 block flex flex-col items-center text-xl font-medium text-white"
                >
                  <img
                    src="support-donate.svg"
                    className="w-44 mb-6 mt-12 border border-white border-4 rounded-full p-8"
                  />
                  wpłać <span className="block font-bold mb-1">darowiznę</span>{" "}
                  <ArrowLong isLarge />
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
                  <span className="block font-bold mb-1">
                    wolontariuszem/ką
                  </span>{" "}
                  <ArrowLong isLarge />
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
                  <span className="block font-bold mb-1">
                    ubrania lub środki czystości
                  </span>{" "}
                  <ArrowLong isLarge />
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
                  zorganizuj{" "}
                  <span className="block font-bold mb-1">zbiórkę</span>{" "}
                  <ArrowLong isLarge />
                </a>
              </div>{" "}
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
