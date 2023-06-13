import HeaderSlider from "@/components/atoms/header-slider";
import HeaderContent from "@/components/molecules/header-content";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
  // const {
  //   titlePl,
  //   titlePl2Line,
  //   titleEn,
  //   titleEn2Line,
  //   descriptionPl,
  //   descriptionEn,
  //   buttonPl,
  //   buttonEn,
  //   images,
  // } = slider.fields;
  console.log(slider[0]);

  return (
    <div className="w-full min-h-[calc(100vh-128px)] pl-28 bg-primaryGray flex flex-col lg:flex-row lg:justify-between">
      <HeaderContent
        title={slider[0].fields.titlePl}
        title2Line={slider[0].fields.titlePl2Line}
        description={slider[0].fields.descriptionPl}
      />
      <HeaderSlider images={slider[0].fields.images} />
    </div>
  );
};

export default Header;
