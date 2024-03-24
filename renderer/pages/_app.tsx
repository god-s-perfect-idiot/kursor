import React from "react";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const ubuntu = Poppins({
  weight: ["400"],
  subsets: ["latin-ext"],
});

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={ubuntu.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
