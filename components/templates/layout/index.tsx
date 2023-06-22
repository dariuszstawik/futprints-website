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
    console.log("in use effect start");
    /*
    // if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_KEY)
    //   return; */
    console.log(
      "in use effect start2",
      process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
    );
    console.log(
      "in use effect start2",
      process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY
    );

    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
    });

    client
      .getEntries({ content_type: "footer" })
      .then((res) => {
        setData(res.items);
        console.log("in use effect", res);
      })
      .catch((e) => {
        console.log("ERRORR", e);
      });
    tagline = data ? data[0].fields.taglinePl : "nie ma daty";
  }, []);

  // tagline = lang === "en" ? data[0].fields.taglineEn : data[0].fields.taglinePl;

  console.log("wyświetlam w layout 2");
  console.log(tagline);

  // let tagline;

  // let tagline = data ? data[0].fields.taglinePl : "nie ma daty";

  return (
    <>
      <Navbar />
      {children}
      <Footer tagline={tagline} />
    </>
  );
};

export default Layout;
