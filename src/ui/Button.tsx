import { FC } from "react";
import { makeStyles } from "@material-ui/styles";
import { Button as MaterialBtn, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: ({
    bgColor,
    textColor,
    size,
    hoverBgColor = "default",
    borderRadius = "0",
  }: IButtonStyles) => ({
    backgroundColor:
      bgColor === "transparent"
        ? "transparent"
        : bgColor === "primary"
        ? theme.palette.primary.main
        : theme.palette.secondary.main,
    color: theme.palette[textColor].main,
    width:
      size === "sm"
        ? "90px"
        : size === "md"
        ? "170px"
        : size === "lg"
        ? "200px"
        : "300px",
    ...(size === "sm" ? { paddingTop: "2px", paddingBottom: "2px" } : {}),
    borderColor: theme.palette.secondary.light,
    textTransform: "none",
    borderRadius,
    "&:hover": {
      ...(hoverBgColor === "secondary"
        ? { backgroundColor: theme.palette.secondary.light }
        : hoverBgColor === "primary"
        ? { backgroundColor: theme.palette.primary.dark }
        : {}),
    },
    whiteSpace: "nowrap",
  }),
  label: {
    fontFamily: "Geometria",
  },
}));

interface IButtonStyles {
  bgColor?: "primary" | "secondary" | "transparent";
  variant: "outlined" | "text";
  textColor: "primary" | "secondary";
  size: "sm" | "md" | "lg" | "xl";
  hoverBgColor?: "primary" | "secondary" | "default";
  borderRadius?: string;
}

interface IButtonProps {
  props?: any;
  styles: IButtonStyles;
  onClick?: () => void;
  link?: string;
}

export const Button: FC<IButtonProps> = ({
  styles,
  link = "",
  styles: { variant },
  onClick,
  children,
  props,
}) => {
  const classes = useStyles(styles);
  return (
    <MaterialBtn
      href={link}
      className={classes.root}
      variant={variant}
      onClick={onClick}
      {...props}
    >
      {children}
    </MaterialBtn>
  );
};
