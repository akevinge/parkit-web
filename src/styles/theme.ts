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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      "800": 800,
      md: 960,
      "1000": 1000,
      lg: 1280,
      "1200": 1200,
      "1440": 1440,
      xl: 1920,
    },
  },
  shape: {
    borderRadius: 0,
  },
});
