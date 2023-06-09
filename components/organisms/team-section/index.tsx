import Divider from "@/components/atoms/divider";
import SectionTitle from "@/components/atoms/section-title";
import TeamCard from "@/components/molecules/team-card";
import React, { useContext } from "react";
import RootContext from "@/context/RootContext";

interface TeamSectionProps {
  teamMembers: {
    fields: {
      name: string;
      positionPl: string;
      positionEn: string;
      descriptionPl: React.ReactNode;
      descriptionEn: React.ReactNode;
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

const TeamSection = ({ teamMembers }: TeamSectionProps) => {
  const { lang } = useContext(RootContext);
  return (
    <div>
      <div className="min-w-96 mx-auto my-6 flex flex-col items-center">
        <SectionTitle>
          {lang === "en" ? "Our team" : "Nasz zespół"}
        </SectionTitle>
        <Divider />
      </div>
      <ul
        className=" list-none w-full
        grid
        gap-12
        px-32
        my-16
        sm:grid-cols-2
        lg:grid-cols-4
        "
      >
        {teamMembers.map((member, i) => {
          return (
            <li key={i}>
              <TeamCard
                name={member.fields.name}
                position={
                  lang === "en" && member.fields.positionEn
                    ? member.fields.positionEn
                    : member.fields.positionPl
                }
                description={
                  lang === "en" && member.fields.descriptionEn
                    ? member.fields.descriptionEn
                    : member.fields.descriptionPl
                }
                image={member.fields.image ? member.fields.image : ""}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TeamSection;
