import Divider from "@/components/atoms/divider";
import SectionTitle from "@/components/atoms/section-title";
import TeamCard from "@/components/molecules/team-card";
import React, { useContext } from "react";
import { createClient } from "contentful";
import RootContext from "@/context/RootContext";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "teamMembers" });

  return {
    props: {
      teamMembers: res.items,
    },
  };
}

const TeamSection = ({ teamMembers }) => {
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
        className=" w-full
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
