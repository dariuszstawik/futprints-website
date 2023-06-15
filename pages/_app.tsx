import Layout from "@/components/templates/layout";
import RootContext from "@/context/RootContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const [lang, setLang] = useState("pl");

  const changeLang = (chosenLang) => {
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RootContext.Provider>
  );
}
