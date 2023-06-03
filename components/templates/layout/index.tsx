import Footer from "@/components/organisms/footer";
import Navbar from "@/components/organisms/navbar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
