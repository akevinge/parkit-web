import { FC } from "react";
import { Button } from "../../ui/Button";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  btnContentWrap: {
    width: "90%",
    margin: "auto",
    height: "100%",
    display: "inline-flex",
    gap: "10%",
    justifyContent: "flex-start",
  },
  logo: {
    width: "30px",
  },
});

export const GoogleLoginBtn: FC = () => {
  const classes = useStyles();
  return (
    <Button
      styles={{
        variant: "outlined",
        size: "xl",
        textColor: "secondary",
        bgColor: "transparent",
        borderRadius: "5px",
        hoverBgColor: "primary",
      }}
      props={{
        style: {
          height: "52px",
          fontSize: "18px",
        },
      }}
    >
      <div className={classes.btnContentWrap}>
        <img
          className={classes.logo}
          src="/svgs/logos/google_logo.svg"
          alt=""
        />
        Log in with Google
      </div>
    </Button>
  );
};
