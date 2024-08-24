import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />;

      </Layout>
    </>
  )
}
