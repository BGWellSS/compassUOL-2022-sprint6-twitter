import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Search from "./Search";

export default {
  title: "Components/Search",
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const searchLigth = Template.bind({});
searchLigth.args = {
  placeholder: "Search Twitter",
  dark: false,
};

export const searchDark = Template.bind({});
searchDark.args = {
  placeholder: "Search Twitter",
  dark: true,
};
