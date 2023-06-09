import Head from "next/head";
import { Inter } from "next/font/google";
import Container from "@/components/atoms/container";
import Header from "@/components/organisms/header";
import ActivitiesSection from "@/components/organisms/activities-section";
import SupportSection from "@/components/organisms/support-section";
import NewsSection from "@/components/organisms/news-section";
import CtaSection from "@/components/organisms/cta-section";
import { createClient } from "contentful";
import Layout from "@/components/templates/layout";

const Fade = require("react-reveal/Fade");

export interface ImageProps {
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
}

interface HomeProps {
  activities: {
    fields: {
      button: string;
      buttonEn: string;
      slug: string;
      paragraph1TitlePl: string;
      paragraph1TitleEn: string;
      paragraph2TitlePl: string;
      paragraph2TitleEn: string;
      paragraph3TitlePl: string;
      paragraph3TitleEn: string;
      paragraph4TitlePl: string;
      paragraph4TitleEn: string;
      paragraph1TextPl: React.ReactNode;
      paragraph2TextPl: React.ReactNode;
      paragraph3TextPl: React.ReactNode;
      paragraph4TextPl: React.ReactNode;
      paragraph1TextEn: React.ReactNode;
      paragraph2TextEn: React.ReactNode;
      paragraph3TextEn: React.ReactNode;
      paragraph4TextEn: React.ReactNode;
      paragraph1Img: {
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
      paragraph2Img: {
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
      paragraph3Img: {
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
      paragraph4Img: {
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
  news: {
    fields: {
      titleEn: string;
      titlePl: string;
      leadPl: string;
      leadEn: string;
      slug: string;
      contentPl: React.ReactNode;
      contentEn: React.ReactNode;
      image: {
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

export async function getStaticProps() {
  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_KEY) {
    throw Error("Env variable error");
  }

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "activities" });
  const res2 = await client.getEntries({ content_type: "support1" });
  const res3 = await client.getEntries({ content_type: "slider" });
  const res4 = await client.getEntries({ content_type: "news" });
  const resFooter = await client.getEntries({ content_type: "footer" });
  // zmienić nazwy resów
  return {
    props: {
      activities: res.items,
      support1: res2.items,
      slider: res3.items,
      news: res4.items,
      footer: resFooter.items,
    },
    revalidate: 10,
  };
}

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  activities,
  support1,
  slider,
  news,
  footer,
}: HomeProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  console.log(footer);
  return (
    <Layout footer={footer}>
      <Head>
        <title>Fundacja Futprints</title>
        <meta
          name="description"
          content="Pomagamy osobom zagrożonym wykluczeniem, szczególnie osobom w kryzysie bezdomności"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <Container>
          <Header slider={slider} />
          <CtaSection />
          <ActivitiesSection activities={activities} />
          <SupportSection support1={support1} />
          <NewsSection content={news} isHomepage />
        </Container>
      </div>
    </Layout>
  );
}
