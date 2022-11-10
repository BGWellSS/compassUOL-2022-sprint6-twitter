import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Follow from "./Follow";

export default {
  title: "Components/Follow",
  component: Follow,
} as ComponentMeta<typeof Follow>;

const Template: ComponentStory<typeof Follow> = (args) => <Follow {...args} />;

export const followLight = Template.bind({});
followLight.args = {
  dark: false,
};

export const followDark = Template.bind({});
followDark.args = {
  dark: true,
};
