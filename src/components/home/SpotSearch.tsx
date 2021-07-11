import { makeStyles } from "@material-ui/styles";
import {
  TextField,
  Theme,
  Typography,
  InputLabel,
  Grid,
} from "@material-ui/core";
import { Button } from "../../ui/Button";
import { FC } from "react";
import { DatePicker } from "../../ui/DatePicker";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100vw",
    height: "60vw",
    display: "flex",
    justifyContent: "flex-end",
    position: "absolute",
    top: "102vh",
    left: 0,
  },
  inner: {
    height: "auto",
    paddingRight: "12vw",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },
  title: {
    fontWeight: 500,
    fontSize: "35px",
  },
  textInput: {
    width: "300px",
    "& > label": {
      fontSize: "14px",
    },
  },
  inputLabel: {
    color: theme.palette.secondary.main,
    fontWeight: 500,
    fontSize: "17px",
    marginBottom: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
}));

export const SpotSearch: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <Typography className={classes.title} variant="h3" component="h3">
          Search for spots anywhere
        </Typography>
        <form className={classes.form}>
          <div>
            <InputLabel className={classes.inputLabel} htmlFor="search-bar">
              Location
            </InputLabel>
            <TextField
              id="search-bar"
              className={classes.textInput}
              variant="filled"
              color="secondary"
              size="small"
              label="Search by address, state, city, etc."
            />
          </div>
          <div>
            <InputLabel className={classes.inputLabel} htmlFor="search-bar">
              Date
            </InputLabel>
            <DatePicker />
          </div>

          <Button
            styles={{
              variant: "text",
              bgColor: "secondary",
              hoverBgColor: "secondary",
              size: "lg",
              textColor: "primary",
            }}
            props={{
              style: {
                width: "300px",
                paddingTop: "10px",
                paddingBottom: "10px",
                fontSize: "15px",
                letterSpacing: "0.3px",
              },
            }}
          >
            Search for a spot
          </Button>
        </form>
      </div>
    </div>
  );
};
