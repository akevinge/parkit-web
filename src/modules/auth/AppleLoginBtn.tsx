import { FC } from "react";
import { Button } from "../../ui/Button";
import { makeStyles } from "@material-ui/styles";
import { login } from "./login";

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

export const AppleLoginBtn: FC = () => {
  const classes = useStyles();
  return (
    <Button
      styles={{
        variant: "outlined",
        size: "xl",
        textColor: "primary",
        bgColor: "secondary",
        borderRadius: "5px",
        hoverBgColor: "secondary",
      }}
      props={{
        style: {
          height: "57px",
          fontSize: "18px",
        },
      }}
      onClick={() => login("apple")}
    >
      <div className={classes.btnContentWrap}>
        <img
          className={classes.logo}
          src="/svgs/logos/apple_logo.svg"
          alt=""
          style={{ filter: "invert(100%)" }}
        />
        Log in with Apple
      </div>
    </Button>
  );
};
