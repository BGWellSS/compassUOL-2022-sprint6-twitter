import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MenuItem from "./MenuItem";

export default {
  title: "Components/Menu item",
  component: MenuItem,
  argTypes: {
    iconName: {
      control: { type: "select" },
      options: [
        "logo",
        "home",
        "explore",
        "notifications",
        "messages",
        "bookmarks",
        "lists",
        "profile",
        "more",
      ],
    },
  },
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const menuItem = Template.bind({});
menuItem.args = {
  label: "Home",
  iconName: "home",
  linkURL: "/404.html",
};

export const menuItemDark = Template.bind({});
menuItemDark.args = {
  label: "Home",
  iconName: "home",
  linkURL: "/404.html",
  dark: true,
};

export const menuItemSelected = Template.bind({});
menuItemSelected.args = {
  label: "Home",
  iconName: "home",
  linkURL: "/404.html",
  selected: true,
};
