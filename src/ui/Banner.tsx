import { FC } from "react";
import { Grid, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme: Theme) => ({
  container: ({ size = "md" }: IBannerStyles) => ({
    backgroundColor: theme.palette.primary.main,
    width: size === "md" ? "20vw" : "32vw",
    minWidth: "300px",
    height: "130px",
    overflow: "hidden",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    boxShadow: `0 4px 6px 0 rgba(0,0,0,0.25)`,
    [theme.breakpoints.down("1440")]: {
      height: "100px",
    },
  }),
  innerGrid: {
    width: "auto",
    position: "relative",
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down("1200")]: {
      marginLeft: 0,
    },
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: "5px",
      left: theme.spacing(3),
      [theme.breakpoints.down("1200")]: {
        left: "20px",
      },
      width: "60%",
      height: "1px",
      backgroundColor: theme.palette.primary.dark,
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "5px",
      left: theme.spacing(3),
      [theme.breakpoints.down("1200")]: {
        left: "20px",
      },
      width: "0",
      height: "1px",
      transition: "width 0.75s",
      backgroundColor: theme.palette.secondary.main,
    },
    "&:hover::after": {
      width: "60%",
    },
  },
  text: {
    fontWeight: 500,
    whiteSpace: "nowrap",
    [theme.breakpoints.down("1440")]: {
      fontSize: "25px",
    },
    [theme.breakpoints.down("1200")]: {
      fontSize: "20px",
    },
  },
}));

interface IBannerProps {
  styles: IBannerStyles;
  onClick?: () => void;
}

interface IBannerStyles {
  size: "md" | "lg";
}

export const Banner: FC<IBannerProps> = ({ styles, onClick, children }) => {
  const classes = useStyles(styles);
  return (
    <div className={classes.container}>
      <Grid
        className={classes.innerGrid}
        container
        direction="row"
        spacing={5}
        alignItems="center"
        wrap="nowrap"
      >
        <Grid item>
          <Typography className={classes.text} variant="h4" component="h4">
            {children}
          </Typography>
        </Grid>
        <Grid item>
          <ArrowForwardIosIcon
            style={{
              fontSize: 30,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};
