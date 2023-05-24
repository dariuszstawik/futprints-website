import React from "react";

const Container = ({ children }) => {
  // const containerStyle = {
  //   width: "100vw",
  //   height: "100%",
  //   position: "fixed",
  //   backgroundImage: "url('/pngegg.svg')",
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  //   backgroundPosition: "left"
  // }

  return (
    <div className="w-100vw h-full mt-32 overflow-hidden">
      {children}
      {/* <div style={containerStyle}>{children}</div> */}
    </div>
  );
};

export default Container;
