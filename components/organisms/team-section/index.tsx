import Divider from "@/components/atoms/divider";
import SectionTitle from "@/components/atoms/section-title";
import TeamCard from "@/components/molecules/team-card";
import React from "react";
import ShuffleTeam from "../shuffle-team";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
  console.log(teamMembers);
  return (
    <div>
      <div className="min-w-96 mx-auto my-6 flex flex-col items-center">
        <SectionTitle>Nasz zespół</SectionTitle>
        <Divider />
      </div>
      <ul
        className="
        grid
        gap-12
        mx-32
        my-16
        sm:grid-cols-2
        lg:grid-cols-4
        lg:max-w-screen-lg"
      >
        {teamMembers.map((member, i) => {
          return (
            <li key={i}>
              <TeamCard
                name={member.fields.name}
                position={member.fields.positionPl}
                description={documentToReactComponents(
                  member.fields.descriptionPl
                )}
                // image={
                //   member.fields.image.fields.file.url
                //     ? member.fields.image.fields.file.url
                //     : ""
                // }
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TeamSection;
