import HeaderSlider from "@/components/atoms/header-slider";
import HeaderContent from "@/components/molecules/header-content";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useContext } from "react";
import RootContext from "@/context/RootContext";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "slider" });

  return {
    props: {
      slider: res.items,
    },
  };
}

const Header = ({ slider }) => {
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
      className="w-full min-h-[calc(100vh-128px)] pl-28 bg-primaryGray flex flex-col lg:flex-row lg:justify-between"
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
