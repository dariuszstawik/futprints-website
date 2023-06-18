import ArrowLong from "@/components/atoms/arrow-long";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  position: string;
  description: React.ReactNode;
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
}

const TeamCard = ({ name, position, description, image }: TeamCardProps) => {
  return (
    <div className="p-4 border rounded">
      <Image
        className="object-cover w-24 h-24 p-4 rounded-full shadow"
        src={image?.fields?.file?.url ? "https://" + image.fields.file.url : ""}
        alt="Person"
        width={image.fields?.file?.details?.image?.width}
        height={image.fields?.file?.details?.image?.height}
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
