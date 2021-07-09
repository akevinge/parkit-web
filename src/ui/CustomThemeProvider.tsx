import { FC } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    primary: {
      dark: "#F1F1F1",
      main: "#fff",
    },
    secondary: {
      main: "#000",
      light: "#2E2E2E",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "Geometria",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

export const CustomThemeProvider: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
