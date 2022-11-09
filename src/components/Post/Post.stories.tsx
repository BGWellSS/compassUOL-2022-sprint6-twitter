import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Post from "./Post";

export default {
  title: "Components/Post",
  component: Post,
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = (args) => <Post {...args} />;

export const postLigth = Template.bind({});
postLigth.args = {
  dark: false,
  placeholder: "What’s happening?",
};

export const postDark = Template.bind({});
postDark.args = {
  dark: true,
  placeholder: "What’s happening?",
};
