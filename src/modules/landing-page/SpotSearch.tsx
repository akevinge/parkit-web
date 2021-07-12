import { makeStyles } from "@material-ui/styles";
import { TextField, Theme, Typography, InputLabel } from "@material-ui/core";
import { Button } from "../../ui/Button";
import { FC } from "react";
import { DatePicker } from "../../ui/DatePicker";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100vw",
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "-40vh",
    marginBottom: "33vh",
    [theme.breakpoints.down("800")]: {
      margin: "5vh",
      justifyContent: "center",
      marginLeft: 0,
      marginTop: "1vh",
      marginBottom: "10vh",
    },
  },
  inner: {
    width: "45vw",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    [theme.breakpoints.down("800")]: {
      width: "60vw",
      alignItems: "center",
      textAlign: "center",
    },
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
