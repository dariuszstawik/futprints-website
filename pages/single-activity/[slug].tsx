import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Container from "@/components/atoms/container";
import PageHeader from "@/components/molecules/page-header";
import AboutSection from "@/components/organisms/about-section";
import RootContext from "@/context/RootContext";
import { useContext } from "react";

const client = createClient({
  // space: process.env.CONTENTFUL_SPACE_ID,
  // accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "activities" });

  const paths = res.items.map((item) => {
    return { params: { slug: item.fields.slug ? item.fields.slug : "" } };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "activities",
    "fields.slug": params.slug,
  });

  console.log(params);

  return {
    props: { activity: items[0] },
  };
}

const singleActivity = ({ activity }) => {
  const { lang } = useContext(RootContext);

  //   const {
  //     paragraph1TitlePl,
  //     paragraph2TitlePl,
  //     paragraph3TitlePl,
  //     paragraph1TextPl,
  //     paragraph2TextPl,
  //     paragraph3TextPl,
  //     paragraph1Img,
  //     paragraph2Img,
  //     paragraph3Img,
  //   } = activity.fields;

  return (
    <Container>
      <PageHeader>
        {lang === "en" ? "Activities" : "Nasze działania"}
      </PageHeader>
      {activity?.fields && activity?.fields?.paragraph1Img?.fields && (
        <AboutSection
          title={
            lang === "en" && activity.fields.paragraph1TitleEn
              ? activity.fields.paragraph1TitleEn
              : activity.fields.paragraph1TitlePl
          }
          img={
            activity.fields.paragraph1Img ? activity.fields.paragraph1Img : ""
          }
          content={
            lang === "en" && activity.fields.paragraph1TextEn
              ? documentToReactComponents(activity.fields.paragraph1TextEn)
              : documentToReactComponents(activity.fields.paragraph1TextPl)
          }
        ></AboutSection>
      )}
      {activity?.fields?.paragraph2TextPl && (
        <AboutSection
          isReverse
          title={
            lang === "en" && activity.fields.paragraph1TitleEn
              ? activity.fields.paragraph1TitleEn
              : activity.fields.paragraph1TitlePl
          }
          img={
            activity.fields.paragraph2Img ? activity.fields.paragraph2Img : ""
          }
          content={
            lang === "en" && activity.fields.paragraph2TextEn
              ? documentToReactComponents(activity.fields.paragraph2TextEn)
              : documentToReactComponents(activity.fields.paragraph2TextPl)
          }
        ></AboutSection>
      )}
      {activity?.fields?.paragraph3TextPl && (
        <AboutSection
          isReverse
          title={
            activity.fields.paragraph3TitlePl
              ? activity.fields.paragraph3TitlePl
              : ""
          }
          img={
            activity.fields.paragraph3Img ? activity.fields.paragraph3Img : ""
          }
          content={
            lang === "en" && activity.fields.paragraph3TextEn
              ? documentToReactComponents(activity.fields.paragraph3TextEn)
              : documentToReactComponents(activity.fields.paragraph3TextPl)
          }
        ></AboutSection>
      )}
    </Container>
  );
};

export default singleActivity;
