import Container from "@/components/atoms/container";
import SupportSection from "@/components/organisms/support-section";
import { createClient } from "contentful";
import React from "react";

interface SupportProps {
  support1: {
    fields: {
      titlePl: string;
      titleEn: string;
      leadPl: string;
      leadEn: string;
      textPl: React.ReactNode;
      textEn: React.ReactNode;
      icon: {
        fields: {
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
  };
}

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

const support = ({ support1 }: SupportProps) => {
  return (
    <Container>
      <SupportSection support1={support1} />
    </Container>
  );
};

export default support;
