import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const HeaderSlider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <AutoplaySlider play={true} cancelOnInteraction={false} interval={3000}>
    <div className="relative w-[700px] h-[484px] col-start-2 col-end-3 before:content-[''] before:w-[700px] before:h-1 before:absolute before:top-0 before:keft-0 before:bg-green-800
    after:content-[''] after:w-[700px] after:h-[484px] after:absolute after:top-0 after:left-0 after:bg-green-800 after:opacity-25">
      <img src="img1.jpg"/>
    </div>

    <div className="relative w-[700px] h-[484px] col-start-2 col-end-3 before:content-[''] before:w-[700px] before:h-1 before:absolute before:top-0 before:keft-0 before:bg-green-800
    after:content-[''] after:w-[700px] after:h-[484px] after:absolute after:top-0 after:left-0 after:bg-green-800 after:opacity-25">
      <img src="img2.jpg"/>
    </div>
      </AutoplaySlider>
    
  )
}

export default HeaderSlider