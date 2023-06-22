import Footer from "@/components/organisms/footer";
import Navbar from "@/components/organisms/navbar";
import RootContext from "@/context/RootContext";
import React, { useContext } from "react";

interface LayoutProps {
  children: React.ReactNode;
  footer?: {
    taglinePl: string;
    taglineEn: string;
  };
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "footer" });

  return {
    props: {
      footer: res.items,
    },
  };
}

const Layout = ({ children, footer }: LayoutProps) => {
  const { lang } = useContext(RootContext);

  console.log("wyświetlam w layout");
  console.log(footer);

  let tagline;

  // tagline =
  //   lang === "en" ? footer[0].fields.taglineEn : footer[0].fields.taglinePl;

  return (
    <>
      <Navbar />
      {children}
      <Footer tagline={tagline} />
    </>
  );
};

export default Layout;
