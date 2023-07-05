import HeaderSlider from "@/components/atoms/header-slider";
import HeaderContent from "@/components/molecules/header-content";
import { useContext } from "react";
import RootContext from "@/context/RootContext";

interface HeaderProps {
  slider: {
    fields: {
      titlePl: string;
      titlePl2Line: string;
      titleEn: string;
      titleEn2Line: string;
      descriptionPl: string;
      descriptionEn: string;
      buttonPl: string;
      buttonEn: string;
      images: {
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

const Header = ({ slider }: HeaderProps) => {
  const {
    titlePl,
    titlePl2Line,
    titleEn,
    titleEn2Line,
    descriptionPl,
    descriptionEn,
    buttonPl,
    buttonEn,
    images,
  } = slider[0].fields;

  const { lang } = useContext(RootContext);

  return (
    <div
      id="top"
      className="w-full min-h-[calc(100vh-128px)] pl-16 bg-primaryGray flex flex-col lg:flex-row lg:justify-between lg:pl-28"
    >
      <HeaderContent
        title={lang === "en" && titleEn ? titleEn : titlePl}
        title2Line={lang === "en" && titleEn2Line ? titleEn2Line : titlePl2Line}
        description={
          lang === "en" && descriptionEn ? descriptionEn : descriptionPl
        }
      />
      <HeaderSlider images={images} />
    </div>
  );
};

export default Header;
