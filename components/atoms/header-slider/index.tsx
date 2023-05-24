import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const HeaderSlider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="w-7/12  mx-0 overflow-hidden">
      <AutoplaySlider
        className="bg-primaryGray p-0 justify-start items-start h-full"
        play={true}
        cancelOnInteraction={false}
        interval={3000}
        bullets={false}
        organicArrows={false}
      >
        <div className="h-full">
          <img src="img3.jpg" className="object-fill" />
        </div>
        <div className="h-full">
          <img src="pomaganie5.jpg" className="object-fill" />
        </div>
        <div className="h-full">
          <img src="img13.jpg" className="object-cover" />
        </div>
        <div className="h-full">
          <img src="img15.jpg" className="object-cover" />
        </div>
      </AutoplaySlider>
    </div>
  );
};

export default HeaderSlider;
