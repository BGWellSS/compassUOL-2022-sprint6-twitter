import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import News from "./News";

export default {
  title: "Components/News section",
  component: News,
} as ComponentMeta<typeof News>;

const Template: ComponentStory<typeof News> = (args) => <News {...args} />;

export const newsLight = Template.bind({});
newsLight.args = {};

export const newsDark = Template.bind({});
newsDark.args = {
  dark: true,
};
