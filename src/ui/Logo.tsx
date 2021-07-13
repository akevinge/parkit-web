import { FC } from "react";
import Link from "next/link";
import { Typography, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  logo: {
    fontFamily: "Geometria",
    color: theme.palette.primary.main,
    fontSize: "18px",
    fontWeight: 500,
    cursor: "pointer",
  },
}));
export const Logo: FC = () => {
  const classes = useStyles();

  return (
    <Link href="/">
      <Typography className={classes.logo} variant="h3" component="h3">
        ParKit
      </Typography>
    </Link>
  );
};
