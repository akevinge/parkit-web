import { makeStyles } from "@material-ui/styles";
import { Theme, Grid, Typography } from "@material-ui/core";
import { FC } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    [theme.breakpoints.down("800")]: {
      marginTop: "15vh",
    },
    position: "relative",
  },
  content: {
    marginLeft: "12vh",
    position: "absolute",
    [theme.breakpoints.down("800")]: {
      flexDirection: "column-reverse",
      marginLeft: 0,
      textAlign: "center",
      alignItems: "center",
      position: "relative",
    },
  },
  mobileImg: {
    width: "50vw",
    minWidth: "400px",
  },
  text: {
    width: "20vw",
    marginTop: "3vh",
    fontWeight: 500,
    fontSize: "35px",
    [theme.breakpoints.down("1000")]: {
      marginTop: 0,
    },
    [theme.breakpoints.down("md")]: {
      width: "25vw",
    },
    [theme.breakpoints.down("800")]: {
      width: "auto",
    },
  },
  badgeWrap: {
    width: "150px",
  },
  downloadBadges: {
    width: "100%",
    height: "auto",
  },
  justifyBadges: {
    [theme.breakpoints.down("800")]: {
      justifyContent: "center",
      marginBottom: "5vh",
    },
  },
  bgSlant2: {
    width: "100vw",
    [theme.breakpoints.down("800")]: {
      display: "none",
    },
  },
}));

export const MobileAd: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid className={classes.content} container justifyContent="flex-start">
        <Grid item>
          <img className={classes.mobileImg} src="/imgs/iphone_and_mac_1.png" />
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography className={classes.text} variant="h4" component="h4">
                Reserve a spot on our mobile app
              </Typography>
            </Grid>
            <Grid item>
              <Grid
                className={classes.justifyBadges}
                container
                direction="row"
                spacing={1}
              >
                <Grid item className={classes.badgeWrap}>
                  <img
                    className={classes.downloadBadges}
                    src="/imgs/download_on_the_app_store_badge.png"
                  />
                </Grid>
                <Grid item className={classes.badgeWrap}>
                  <img
                    className={classes.downloadBadges}
                    src="/imgs/get_it_on_google_play_badge.png"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <img
        className={classes.bgSlant2}
        src="/svgs/slant_2/bg_slant_block_2_black_800up.svg"
        alt=""
      />
    </div>
  );
};
