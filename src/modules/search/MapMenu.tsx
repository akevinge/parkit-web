import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import { FC } from "react";
import { useState } from "react";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { SpotMenu } from "./SpotMenu";
import { SearchBox } from "./SearchBox";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "410px",
    minWidth: "400px",
    height: "100vh",
    position: "absolute",
    left: "0",
    zIndex: 9999,
    backgroundColor: theme.palette.primary.main,
    transition: "left 0.7s",
    borderRight: `0.5px ${theme.palette.secondary.light} solid`,
    display: "grid",
    gridTemplateRows: "10% 90%",
    justifyContent: "center",
    paddingTop: "15px",
  },
  menuToggle: {
    position: "absolute",
    zIndex: 9999,
    right: "-30px",
    top: "40%",
    transform: "translateY(-50%)",
    width: "30px",
    height: "60px",
    backgroundColor: theme.palette.primary.main,
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    border: `0.5px ${theme.palette.secondary.light} solid`,
    cursor: "pointer",
  },
  slideLeft: {
    left: "-400px",
  },
}));

export const MapMenu: FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const toggleMenu = () => setOpen(!open);
  const classes = useStyles();

  return (
    <div
      className={
        open ? classes.container : `${classes.container} ${classes.slideLeft}`
      }
    >
      <div className={classes.menuToggle} onClick={toggleMenu}>
        <ArrowLeftIcon style={{ fontSize: "30px" }} />
      </div>
      <SearchBox />
      <SpotMenu />
    </div>
  );
};
