import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
// import "react-awesome-slider/dist/styles.css";

const HeaderSlider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <AutoplaySlider
      className="bg-white p-0 justify-start items-start"
      play={true}
      cancelOnInteraction={false}
      interval={3000}
      bullets={false}
      organicArrows={false}
    >
      <div className="">
        <img src="img1.jpg" />
      </div>

      <div
      //     className="
      // after:content-['']
      // after:w-[500px] after:h-[460px] after:absolute after:top-0 after:left-0 after:bg-green-800 after:opacity-25
      // "
      >
        <img src="img2.jpg" />
      </div>
    </AutoplaySlider>
    // </div>
  );
};

export default HeaderSlider;
