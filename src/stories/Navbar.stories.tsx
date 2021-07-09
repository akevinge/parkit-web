import { Meta } from "@storybook/react";
import { Navbar } from "../shared-components/Navbar";

export default {
  title: "Navbar",
  component: Navbar,
} as Meta;

export const Primary = () => <Navbar />;
