import React from "react";

const ArticleLead = ({ children }: { children: string }) => {
  return <p className="text-lg leading-6 font-semibold my-8">{children}</p>;
};

export default ArticleLead;
