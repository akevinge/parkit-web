import { FC, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Theme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

interface IStyleProps {
  active: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  container: ({ active }: IStyleProps) => ({
    width: "330px",
    height: "45px",
    backgroundColor: theme.palette.primary.main,
    border: `0.1px ${grey[300]} solid`,
    borderRadius: "6px",
    boxShadow: active ? `0px 0px 2px 0px ${grey[300]}` : "none",
    display: "flex",
    alignContent: "center",
    boxSizing: "content-box",
    overflow: "hidden",
  }),
  input: {
    width: "100%",
    height: "100%",
    outline: "none",
    border: "none",
    fontSize: "15px",
  },
  inputTextFade: {
    position: "absolute",
    right: "-5px",
    top: "50%",
    transform: "translateY(-50%)",
    height: "60%",
    width: "15px",
    background:
      "linear-gradient(to right,rgba(255,255,255,0),rgba(255,255,255,1))",
    zIndex: 999999,
  },
}));

export const SearchBox: FC = () => {
  const [active, setActive] = useState(false);

  const classes = useStyles({ active } as IStyleProps);

  return (
    <Grid container className={classes.container}>
      <div
        style={{
          width: "70%",
          position: "relative",
          height: "90%",
          paddingLeft: "20px",
        }}
      >
        <input
          id="search-box"
          className={classes.input}
          placeholder="Search for spots by address, city, etc"
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
        ></input>
        <div className={classes.inputTextFade}></div>
      </div>
    </Grid>
  );
};
