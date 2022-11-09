import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Menu from "./Menu";

export default {
  title: "Components/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const menu = Template.bind({});
menu.args = {};

export const menuDark = Template.bind({});
menuDark.args = {
  dark: true,
};
