import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const HeaderSlider = ({ images }) => {
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
              <img
                className="h-full object-cover"
                src={image.fields.file.url}
              />
            </div>
          );
        })}
      </AutoplaySlider>
    </div>
  );
};

export default HeaderSlider;
