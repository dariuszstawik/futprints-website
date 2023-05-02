import RootContext from '@/context/RootContext';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  }

  const closeMobileMenu = () => {
    setIsMobileMenuActive(false);
  }

  return <RootContext.Provider value = {{
    isMobileMenuActive,
    toggleMobileMenu,
    closeMobileMenu,
  }}
>  
  <Component {...pageProps} />

  </RootContext.Provider>
}
