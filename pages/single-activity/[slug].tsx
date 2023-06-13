import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Container from "@/components/atoms/container";
import PageHeader from "@/components/molecules/page-header";
import AboutSection from "@/components/organisms/about-section";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
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
  // console.log(activity);
  // console.log(activity.fields.paragraph1TitlePl);
  // console.log(activity.fields.paragraph1Img.fields.file.url);
  // console.log(documentToReactComponents(activity.fields.paragraph1TextPl));

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
      <PageHeader>Nasze działania</PageHeader>
      {activity?.fields && (
        <AboutSection
          title={activity.fields.paragraph1TitlePl}
          img={activity.fields.paragraph1Img.fields.file.url}
          content={documentToReactComponents(activity.fields.paragraph1TextPl)}
        ></AboutSection>
      )}
      {activity?.fields.paragraph2TitlePl &&
        activity.fields.paragraph2Img.fields.file.url &&
        activity.fields.paragraph2TextPl && (
          <AboutSection
            isReverse
            title={
              activity.fields.paragraph2TitlePl
                ? activity.fields.paragraph2TitlePl
                : ""
            }
            img={
              activity.fields.paragraph2Img.fields.file.url
                ? activity.fields.paragraph2Img.fields.file.url
                : ""
            }
            content={documentToReactComponents(
              activity.fields.paragraph2TextPl
                ? activity.fields.paragraph2TextPl
                : ""
            )}
          ></AboutSection>
        )}
      {/* <AboutSection
        title={activity.fields.paragraph3TitlePl}
        img={activity.fields.paragraph3Img.fields.file.url}
        content={documentToReactComponents(activity.fields.paragraph3TextPl)}
      ></AboutSection> */}
    </Container>
  );
};

export default singleActivity;
