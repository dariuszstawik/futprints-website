import Container from "@/components/atoms/container";
import SupportSection from "@/components/organisms/support-section";
import { createClient } from "contentful";
import React from "react";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "support1" });

  return {
    props: {
      support1: res.items,
    },
  };
}

const support = ({ support1 }) => {
  return (
    <Container>
      <SupportSection support1={support1} />
    </Container>
  );
};

export default support;
