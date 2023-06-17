import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="w-100vw h-full mt-32 overflow-hidden">{children}</div>;
};

export default Container;
