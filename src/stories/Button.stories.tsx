import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../ui/Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  styles: {
    bgColor: "primary",
    size: "md",
    variant: "text",
    textColor: "secondary",
    hoverBgColor: "primary",
  },
  children: "Sign up to lease",
};
Primary.parameters = {
  backgrounds: { default: "secondary" },
};

export const Secondary = Template.bind({});
Secondary.args = {
  styles: {
    bgColor: "secondary",
    size: "md",
    variant: "text",
    textColor: "primary",
    hoverBgColor: "secondary",
  },
  children: "Sign up to lease",
};

export const Outlined = Template.bind({});
Outlined.args = {
  styles: {
    variant: "outlined",
    size: "md",
    textColor: "secondary",
    bgColor: "transparent",
    hoverBgColor: "primary",
  },
  children: "Sign up to lease",
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  styles: {
    variant: "text",
    textColor: "primary",
    bgColor: "transparent",
    size: "md",
    hoverBgColor: "secondary",
  },
  children: "Sign up to lease",
};
TextOnly.parameters = {
  backgrounds: { default: "secondary" },
};

export const Rounded = Template.bind({});
Rounded.args = {
  styles: {
    variant: "text",
    textColor: "secondary",
    bgColor: "primary",
    size: "sm",
    hoverBgColor: "primary",
    borderRadius: "10px",
  },
  children: "Sign up",
};
Rounded.parameters = {
  backgrounds: { default: "secondary" },
};
