import { muiTheme } from "storybook-addon-material-ui";
import { theme } from "../src/styles/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "primary",
    values: [
      {
        name: "primary",
        value: "#fff",
      },
      {
        name: "secondary",
        value: "#000",
      },
    ],
  },
};

export const decorators = [muiTheme([theme])];
