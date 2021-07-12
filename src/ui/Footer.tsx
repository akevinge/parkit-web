import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import { FC } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100vw",
    height: "250px",
    backgroundColor: theme.palette.secondary.main,
    marginTop: "18vh",
  },
}));

export const Footer: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>{/* Note: Add content later */}</div>
  );
};
