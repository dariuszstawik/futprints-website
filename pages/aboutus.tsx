import Container from "@/components/atoms/container";
import PageHeader from "@/components/molecules/page-header";
import AboutSection from "@/components/organisms/about-section";
import ActivitiesSection from "@/components/organisms/activities-section";
import Documents from "@/components/organisms/documents";
import SupportSection from "@/components/organisms/support-section";
import TeamSection from "@/components/organisms/team-section";
import RootContext from "@/context/RootContext";
import { createClient } from "contentful";
import React, { useContext } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface AboutusProps {
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

  teamMembers: {
    fields: {
      name: string;
      positionPl: string;
      positionEn: string;
      descriptionPl: React.ReactNode;
      descriptionEn: React.ReactNode;
      image: {
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
  documents: {
    fields: {
      titlePl: string;
      titleEn: string;
      question1Pl: string;
      question2Pl: string;
      question3Pl: string;
      question4Pl: string;
      answer1Pl: React.ReactNode;
      answer2Pl: React.ReactNode;
      answer3Pl: React.ReactNode;
      answer4Pl: React.ReactNode;
      question1En: string;
      question2En: string;
      question3En: string;
      question4En: string;
      answer1En: React.ReactNode;
      answer2En: React.ReactNode;
      answer3En: React.ReactNode;
      answer4En: React.ReactNode;
    };
  }[];
  aboutUs: {
    paragraph1TitlePl: string;
    paragraph2TitlePl: string;
    paragraph3TitlePl: string;
    paragraph4TitlePl: string;
    paragraph1TitleEn: string;
    paragraph2TitleEn: string;
    paragraph3TitleEn: string;
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
    includeActivitiesSection: boolean;
    includeSupportSection: boolean;
    includeTeamSection: boolean;
    includeDocumentSection: boolean;
  }[];
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "activities" });
  const res2 = await client.getEntries({ content_type: "support1" });
  const res3 = await client.getEntries({ content_type: "teamMembers" });
  const res4 = await client.getEntries({ content_type: "documents" });
  const res5 = await client.getEntries({ content_type: "aboutUs" });

  return {
    props: {
      activities: res.items,
      support1: res2.items,
      teamMembers: res3.items,
      documents: res4.items,
      aboutUs: res5.items,
    },
  };
}

const aboutus = ({
  activities,
  support1,
  teamMembers,
  documents,
  aboutUs,
}: AboutusProps) => {
  const { lang } = useContext(RootContext);

  const {
    paragraph1TitlePl,
    paragraph2TitlePl,
    paragraph3TitlePl,
    paragraph4TitlePl,
    paragraph1TitleEn,
    paragraph2TitleEn,
    paragraph3TitleEn,
    paragraph4TitleEn,
    paragraph1TextPl,
    paragraph2TextPl,
    paragraph3TextPl,
    paragraph4TextPl,
    paragraph1TextEn,
    paragraph2TextEn,
    paragraph3TextEn,
    paragraph4TextEn,
    paragraph1Img,
    paragraph2Img,
    paragraph3Img,
    paragraph4Img,
    includeActivitiesSection,
    includeSupportSection,
    includeTeamSection,
    includeDocumentSection,
  } = aboutUs[0].fields;

  return (
    <div className="relative">
      <Container>
        <PageHeader>{lang === "en" ? "About us" : "O nas"}</PageHeader>
        {paragraph1TitlePl || paragraph1TitleEn ? (
          <AboutSection
            title={
              lang === "en" && paragraph1TitleEn
                ? paragraph1TitleEn
                : paragraph1TitlePl
            }
            img={paragraph1Img ? paragraph1Img : ""}
            content={
              lang === "en" && paragraph1TextEn
                ? documentToReactComponents(paragraph1TextEn)
                : documentToReactComponents(paragraph1TextPl)
            }
          ></AboutSection>
        ) : (
          ""
        )}
        {paragraph2TitlePl || paragraph2TitleEn ? (
          <AboutSection
            isReverse
            title={
              lang === "en" && paragraph2TitleEn
                ? paragraph2TitleEn
                : paragraph2TitlePl
            }
            img={paragraph2Img ? paragraph2Img : ""}
            content={
              lang === "en" && paragraph2TextEn
                ? documentToReactComponents(paragraph2TextEn)
                : documentToReactComponents(paragraph2TextPl)
            }
          ></AboutSection>
        ) : (
          ""
        )}
        {paragraph3TitlePl || paragraph3TitleEn ? (
          <AboutSection
            title={
              lang === "en" && paragraph3TitleEn
                ? paragraph3TitleEn
                : paragraph3TitlePl
            }
            img={paragraph3Img ? paragraph3Img : ""}
            content={
              lang === "en" && paragraph3TextEn
                ? documentToReactComponents(paragraph3TextEn)
                : documentToReactComponents(paragraph3TextPl)
            }
          ></AboutSection>
        ) : (
          ""
        )}
        {paragraph4TitlePl || paragraph4TitleEn ? (
          <AboutSection
            isReverse
            title={
              lang === "en" && paragraph4TitleEn
                ? paragraph4TitleEn
                : paragraph4TitlePl
            }
            img={paragraph4Img ? paragraph4Img : ""}
            content={
              lang === "en" && paragraph4TextEn
                ? documentToReactComponents(paragraph4TextEn)
                : documentToReactComponents(paragraph4TextPl)
            }
          ></AboutSection>
        ) : (
          ""
        )}

        {includeActivitiesSection && (
          <ActivitiesSection activities={activities} />
        )}
        {includeSupportSection && <SupportSection support1={support1} />}
        {includeTeamSection && <TeamSection teamMembers={teamMembers} />}
        {includeDocumentSection && <Documents content={documents} />}
      </Container>
    </div>
  );
};

export default aboutus;
