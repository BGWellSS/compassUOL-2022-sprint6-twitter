import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Profile from "./Profile";

export default {
  title: "Components/Profile",
  component: Profile,
  argTypes: {
    profileType: {
      control: { type: "select" },
      options: ["basic", "follow"],
    },
  },
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />;

export const profileBasicLigth = Template.bind({});
profileBasicLigth.args = {
  userName: "User Name",
  userTagName: "@tagname",
  profileType: "basic",
};

export const profileBasicDark = Template.bind({});
profileBasicDark.args = {
  userName: "User Name",
  userTagName: "@tagname",
  profileType: "basic",
  dark: true,
};

export const profileFolowLigth = Template.bind({});
profileFolowLigth.args = {
  userName: "User Name",
  userTagName: "@tagname",
  profileType: "follow",
};

export const profileFolowDark = Template.bind({});
profileFolowDark.args = {
  userName: "User Name",
  userTagName: "@tagname",
  profileType: "follow",
  dark: true,
};
