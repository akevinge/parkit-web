import { FC } from "react";
import { Grid, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Banner } from "../../ui/Banner";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: "auto",
    marginTop: "-50vh",
    position: "relative",
    zIndex: 999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("800")]: {
      marginTop: "10vh",
    },
  },
  img: {
    width: "40vw",
    minWidth: "300px",
  },
}));

export const CallToAction: FC = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.container}
      container
      direction="row"
      spacing={7}
      alignItems="center"
    >
      <Grid item>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Banner styles={{ size: "lg" }}>Sign up to rent</Banner>
          </Grid>
          <Grid item>
            <Banner styles={{ size: "lg" }}>Sign up to lease</Banner>
          </Grid>
          <Grid item>
            <Banner styles={{ size: "lg" }}>Learn how it works</Banner>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <img
          className={classes.img}
          src="/imgs/ny_street_w_bridge.png"
          alt=""
        />
      </Grid>
    </Grid>
  );
};
