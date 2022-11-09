import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tweet from "./Tweet";

export default {
  title: "Components/Tweet",
  component: Tweet,
} as ComponentMeta<typeof Tweet>;

const Template: ComponentStory<typeof Tweet> = (args) => <Tweet {...args} />;

export const tweetLigth = Template.bind({});
tweetLigth.args = {
  userName: "User Name",
  userTagName: "@tagname",
  userID: "1",
  userURL: "/404.html",
  postText: "Tom is in a big hurry.",
  imageURL: "/images/post-image-default.png",
  dark: false,
};

export const tweetDark = Template.bind({});
tweetDark.args = {
  userName: "User Name",
  userTagName: "@tagname",
  userID: "2",
  userURL: "/404.html",
  postText: "Tom is in a big hurry.",
  imageURL: "/images/post-image-default.png",
  dark: true,
};

