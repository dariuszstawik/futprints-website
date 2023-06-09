import Divider from "@/components/atoms/divider";
import SectionTitle from "@/components/atoms/section-title";
import React, { useContext } from "react";
import Link from "next/link";
import RootContext from "@/context/RootContext";
import Image from "next/image";
const Slide = require("react-reveal/Slide");

interface SupportSectionProps {
  support1: {
    fields: {
      slug: string;
      titlePl: string;
      titleEn: string;
      leadPl: string;
      leadEn: string;
      textPl: React.ReactNode;
      textEn: React.ReactNode;
      icon: {
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
    };
  }[];
}

const SupportSection = ({ support1 }: SupportSectionProps) => {
  const { lang } = useContext(RootContext);

  return (
    <div
      className="relative w-full pt-6 bg-primary flex after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-primary after:opacity-80"
      style={{
        backgroundImage: 'url("/img14.jpg")',
        backgroundPosition: "center",
      }}
    >
      <div className="support__content w-full px-24 pb-16 z-10">
        <div className=" mx-auto mt-6 flex flex-col justify-center content-center items-center">
          <SectionTitle isWhite>
            {lang === "en" ? "How you can help" : "Jak możesz pomóc"}
          </SectionTitle>
          <Divider isWhite />
          <Slide bottom>
            <div>
              <ul className="list-none py-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {support1.map((item, i) => {
                  return (
                    <li key={i}>
                      <Link
                        className="w-80 flex flex-col items-center text-xl font-medium text-white"
                        href={`/support/${item.fields.slug}`}
                      >
                        <Image
                          className="w-44 mb-6 mt-12 border-white border-4 rounded-full p-8"
                          src={
                            item.fields.icon
                              ? item.fields.icon.fields.file.url
                              : ""
                          }
                          width={
                            item.fields.icon.fields.file.details.image.width
                          }
                          height={
                            item.fields.icon.fields.file.details.image.height
                          }
                          alt={
                            item.fields.icon.fields.description
                              ? item.fields.icon.fields.description
                              : ""
                          }
                        />
                        <span className="block">
                          {lang === "en" && item.fields.titleEn
                            ? item.fields.titleEn.split(" ")[0]
                            : item.fields.titlePl.split(" ")[0]}
                        </span>
                        <span className="block font-bold mb-1">
                          {lang === "en" && item.fields.titleEn
                            ? item.fields.titleEn.split(" ").slice(1).join(" ")
                            : item.fields.titlePl.split(" ").slice(1).join(" ")}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
