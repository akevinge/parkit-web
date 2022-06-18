import { BreakpointOverrides } from "@material-ui/core/styles/createBreakpoints";

declare module "@material-ui/core/styles/createBreakpoints" {
  interface BreakpointOverrides {
    "800": true;
    "1000": true;
    "1200": true;
    "1440": true;
  }
}
