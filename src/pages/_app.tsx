import "../styles/globals.css";
import { AppProps } from "next/app";
import { CustomThemeProvider } from "../ui/CustomThemeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <Component {...pageProps} />
    </CustomThemeProvider>
  );
}

export default MyApp;
