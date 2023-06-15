import ArrowLong from "@/components/atoms/arrow-long";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const TeamCard = ({ name, position, description, image }) => {
  return (
    <div className="p-4 border rounded">
      <img
        className="object-cover w-24 h-24 p-4 rounded-full shadow"
        src={image ? image : "User.svg"}
        alt="Person"
      />
      <div className="flex flex-col justify-center mt-2">
        <p className="text-lg font-bold">{name}</p>
        <p className="mb-4 text-xs text-gray-800">{position}</p>
        <div className="text-sm tracking-wide text-gray-800">
          {documentToReactComponents(description)}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
