import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const HeaderSlider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
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
        <div className="h-full bg-primaryGray">
          <img src="img3.jpg" />
        </div>
        <div className="h-full bg-primaryGray">
          <img src="pomaganie5.jpg" />
        </div>
        <div className="h-full bg-primaryGray">
          <img src="img13.jpg" />
        </div>
        <div className="h-full bg-primaryGray">
          <img src="img15.jpg" />
        </div>
      </AutoplaySlider>
    </div>
  );
};

export default HeaderSlider;
