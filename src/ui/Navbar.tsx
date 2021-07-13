import { FC } from "react";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Button } from "./Button";
import SearchIcon from "@material-ui/icons/Search";
import { Logo } from "./Logo";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: theme.palette.secondary.main,
    width: "100vw",
    height: "60px",
    display: "grid",
    gridTemplateColumns: "2fr 5fr 2fr",
    alignItems: "center",
  },
  centerContainer: {
    display: "flex",
    justifyContent: "center",
  },
  rightContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginRight: "15%",
  },
}));

export const Navbar: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div style={{ marginLeft: "15%" }}>
        <Logo />
      </div>
      <div className={classes.centerContainer}>
        <Button
          styles={{
            variant: "text",
            textColor: "primary",
            bgColor: "transparent",
            hoverBgColor: "secondary",
            size: "md",
            borderRadius: "5px",
          }}
        >
          {"How ParKit works"}
        </Button>
        <Button
          styles={{
            variant: "text",
            textColor: "primary",
            bgColor: "transparent",
            hoverBgColor: "secondary",
            size: "md",
            borderRadius: "5px",
          }}
        >
          {"Search for spots"}
          <SearchIcon style={{ marginLeft: "3px" }} />
        </Button>
      </div>
      <div className={classes.rightContainer}>
        <Button
          link="/login"
          styles={{
            variant: "text",
            textColor: "primary",
            size: "sm",
            bgColor: "transparent",
            hoverBgColor: "secondary",
            borderRadius: "6px",
          }}
        >
          Log in
        </Button>
        <Button
          link="/login"
          styles={{
            variant: "text",
            textColor: "secondary",
            bgColor: "primary",
            size: "sm",
            hoverBgColor: "primary",
            borderRadius: "6px",
          }}
        >
          {"Sign up"}
        </Button>
      </div>
    </div>
  );
};
