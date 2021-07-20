import { FC } from "react";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import { useSpotStore } from "./useSpotStore";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
    height: "100%",
  },
}));

export const SpotMenu: FC = () => {
  const classes = useStyles();
  const { spots } = useSpotStore();
  console.log({ spots });
  return (
    <div className={classes.container}>
      {spots.map(({ id }) => (
        <div key={id}>{""}</div>
      ))}
    </div>
  );
};
