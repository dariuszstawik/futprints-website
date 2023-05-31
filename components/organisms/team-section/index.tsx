import Divider from "@/components/atoms/divider";
import SectionTitle from "@/components/atoms/section-title";
import TeamCard from "@/components/molecules/team-card";
import React from "react";
import ShuffleTeam from "../shuffle-team";

const TeamSection = () => {
  return (
    <div>
      <div className="min-w-96 mx-auto my-6 flex flex-col items-center">
        <SectionTitle>Nasz zespół</SectionTitle>
        <Divider />
      </div>
      <ShuffleTeam />
    </div>
  );
};

export default TeamSection;
