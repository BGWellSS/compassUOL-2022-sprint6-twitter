import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar from "./Avatar";


export default {
  title: "Components/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const avatarSmall = Template.bind({});
avatarSmall.args = {
  size: "small",
  linkURL: "/404.html",
};

export const avatarMedium = Template.bind({});
avatarMedium.args = {
  size: "medium",
  linkURL: "/404.html",
};
