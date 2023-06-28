import Image from "next/image";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

interface HeaderSliderProps {
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
  }[];
}

const HeaderSlider = ({ images }: HeaderSliderProps) => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  console.log(images);

  return (
    <div className="w-full lg:w-7/12 mx-0 overflow-hidden">
      <AutoplaySlider
        className="bg-primaryGray p-0 justify-start items-start h-full"
        play={true}
        cancelOnInteraction={false}
        interval={3000}
        bullets={false}
        organicArrows={false}
      >
        {images.map((image, i) => {
          return (
            <div className="h-full bg-primaryGray" key={i}>
              <Image
                className="h-full object-cover"
                src={
                  `https:${image.fields.file.url}`
                    ? `https:${image.fields.file.url}`
                    : ""
                }
                width={image.fields.file.details.image.width}
                height={image.fields.file.details.image.height}
                alt={image.fields.description ? image.fields.description : ""}
              />
            </div>
          );
        })}
      </AutoplaySlider>
    </div>
  );
};

export default HeaderSlider;
