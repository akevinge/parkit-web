import { FC } from "react";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  bgSlant1_1440up: {
    width: "100vw",
    [theme.breakpoints.up("1440")]: {
      display: "block",
    },
    [theme.breakpoints.down("1440")]: {
      display: "none",
    },
  },
  bgSlant1_1200up: {
    width: "100vw",
    [theme.breakpoints.up("1440")]: {
      display: "none !important",
    },
    [theme.breakpoints.up("1200")]: {
      display: "block",
    },
    [theme.breakpoints.down("1200")]: {
      display: "none",
    },
  },
  bgSlant1_1000up: {
    width: "100vw",
    [theme.breakpoints.up("1200")]: {
      display: "none !important",
    },
    [theme.breakpoints.up("1000")]: {
      display: "block",
    },
    [theme.breakpoints.down("1000")]: {
      display: "none",
    },
  },
  bgSlant1_800up: {
    width: "100vw",
    [theme.breakpoints.up("1000")]: {
      display: "none !important",
    },
    [theme.breakpoints.up("800")]: {
      display: "block",
    },
    [theme.breakpoints.down("800")]: {
      display: "none",
    },
  },
  bgSlant1_0up: {
    width: "100vw",
    marginTop: "-1px",
    minWidth: "800px",
    display: "",
  },
  bgSlant1_test: {
    width: "100vw",
    height: "70vh",
    marginTop: "-1px",
    backgroundImage: "url('/svgs/bg_slant_1_black_0up.svg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.up("800")]: {
      display: "none",
    },
    [theme.breakpoints.down("800")]: {
      display: "block",
    },
  },
}));

export const Hero: FC = () => {
  const classes = useStyles();

  return (
    <>
      <img
        className={classes.bgSlant1_1440up}
        src="/svgs/bg_slant_1_black_1440up.svg"
        alt=""
      />
      <img
        className={classes.bgSlant1_1200up}
        src="/svgs/bg_slant_1_black_1200up.svg"
        alt=""
      />
      <img
        className={classes.bgSlant1_1000up}
        src="/svgs/bg_slant_1_black_1000up.svg"
        alt=""
      />
      <img
        className={classes.bgSlant1_800up}
        src="/svgs/bg_slant_1_black_800up.svg"
        alt=""
      />
      {/* mobile needs less fluid image */}
      <div className={classes.bgSlant1_test}></div>
    </>
  );
};
