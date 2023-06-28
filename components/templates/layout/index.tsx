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
    ) {
      console.log("nie ma danych z envów");
      return;
    }

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

  if (data) {
    tagline =
      lang === "en" ? data[0].fields.taglineEn : data[0].fields.taglinePl;
  } else {
    tagline =
      lang === "en" ? "We invite you to the Community Center in Katowice, you can find us at 5 Kordeckiego Street." : "Zapraszamy do Centrum Społecznościowego w Katowicach, znajdziecie nas przy ul. Kordeckiego 5."
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer tagline={tagline} />
    </>
  );
};

export default Layout;
