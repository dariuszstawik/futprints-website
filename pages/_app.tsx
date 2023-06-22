import Layout from "@/components/templates/layout";
import RootContext from "@/context/RootContext";
import "@/styles/globals.css";
import { createClient } from "contentful";
import type { AppProps } from "next/app";
import React, { useState } from "react";

export async function getInitialProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "footer" });
  console.log("--------------", res);
  return {
    props: {
      footer: res.items,
    },
  };
}

export default function App({
  Component,
  pageProps,
  footer,
}: AppProps & { footer: any }) {
  console.log("-----" + footer);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const [lang, setLang] = useState("pl");

  const changeLang = (chosenLang: string) => {
    setLang(chosenLang);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuActive(false);
  };

  return (
    <RootContext.Provider
      value={{
        lang,
        changeLang,
      }}
    >
      <Layout footer={footer}>
        <Component {...pageProps} />
      </Layout>
    </RootContext.Provider>
  );
}
