import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Spacer from "./Spacer";

export default {
  title: "Components/Spacer",
  component: Spacer,
} as ComponentMeta<typeof Spacer>;

const Template: ComponentStory<typeof Spacer> = (args) => <Spacer {...args} />;

export const searchLigth = Template.bind({});
searchLigth.args = {
  dark: false,
};

export const searchDark = Template.bind({});
searchDark.args = {
  dark: true,
};
