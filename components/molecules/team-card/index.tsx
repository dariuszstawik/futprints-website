import ArrowLong from "@/components/atoms/arrow-long";
import React from "react";

const TeamCard = ({ name, position, description, image }) => {
  return (
    <div>
      <img
        className="object-cover w-24 h-24 rounded-full shadow"
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
        alt="Person"
      />
      <div className="flex flex-col justify-center mt-2">
        <p className="text-lg font-bold">{name}</p>
        <p className="mb-4 text-xs text-gray-800">{position}</p>
        <p className="text-sm tracking-wide text-gray-800">{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
