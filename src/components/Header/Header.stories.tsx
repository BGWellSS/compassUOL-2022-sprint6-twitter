import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "./Header";

export default {
  title: "Components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const headerLigth = Template.bind({});
headerLigth.args = {
  label: "Home",
  dark: false,
};

export const headerDark = Template.bind({});
headerDark.args = {
  label: "Home",
  dark: true,
};
