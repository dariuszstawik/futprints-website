import React, { createContext } from "react";

interface contextValue {
  lang: string;
  changeLang: (lang: string) => void;
}

const RootContext = createContext<contextValue>({
  lang: "pl",
  changeLang: () => {},
});

export default RootContext;
