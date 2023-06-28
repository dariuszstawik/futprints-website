import Footer from "@/components/organisms/footer";
import Navbar from "@/components/organisms/navbar";
import RootContext from "@/context/RootContext";
import { createClient } from "contentful";
import React, { useContext, useEffect, useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
  footer?: {
    taglinePl: string;
    taglineEn: string;
  };
}

const Layout = ({ children, footer }: LayoutProps) => {
  const { lang } = useContext(RootContext);

  const [data, setData] = useState();

  let tagline;

  useEffect(() => {
    if (
      !process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ||
      !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY
    )
      console.log("nie ma danych z envów");

    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
    });

    client
      .getEntries({ content_type: "footer" })
      .then((res) => {
        setData(res.items);
        console.log("in use effect", res.items[0]);
      })
      .catch((e) => {
        console.log("ERRORR", e);
      });
  }, []);

  // console.log(data[0]?.fields.taglineEn ? data[0].fields.taglineEn : "");

  if (data) {
    tagline =
      lang === "en" ? data[0].fields.taglineEn : data[0].fields.taglinePl;
  }

  // tagline = data ? data[0].fields.taglinePl : "";

  // tagline = lang === "en" ? data[0].fields.taglineEn : data[0].fields.taglinePl;

  return (
    <>
      <Navbar />
      {children}
      <Footer tagline={tagline} />
    </>
  );
};

export default Layout;
