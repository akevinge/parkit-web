import "../styles/globals.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
