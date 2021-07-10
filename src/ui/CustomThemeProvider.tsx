import { FC } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "../styles/theme";

export const CustomThemeProvider: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
