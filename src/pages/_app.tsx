import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import PropTypes from "prop-types";
import { CustomThemeProvider } from "../ui/CustomThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useEffect } from "react";
import { useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  // components need to wait for server jssStyles removal - not sure if there's a better way to do this
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const jssStyles = document.getElementById("jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
      setLoading(false);
    }
  }, []);

  return (
    <>
      <Head>
        <title>ParKit</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <CustomThemeProvider>
        <CssBaseline />
        {!loading && <Component {...pageProps} />}
      </CustomThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
