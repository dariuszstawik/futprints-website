import React from "react";

const Divider = ({ isWhite }) => {
  return (
    <div
      className={`w-20 h-1 rounded-sm ${isWhite ? "bg-white" : "bg-primary"}`}
    />
  );
};

export default Divider;
