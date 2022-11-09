import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const primaryBig = Template.bind({});
primaryBig.args = {
  label: "Primary Big",
  btnType: "primary",
  size: "big",
};

export const primaryMedium = Template.bind({});
primaryMedium.args = {
  label: "Primary medium",
  btnType: "primary",
  size: "medium",
};

export const primaryMediumFade = Template.bind({});
primaryMediumFade.args = {
  label: "Primary medium faded",
  btnType: "primary",
  size: "medium",
  fade: true,
};

export const secondaryMedium = Template.bind({});
secondaryMedium.args = {
  label: "Secondary Medium",
  btnType: "secondary",
  size: "medium",
};

export const secondarySmall = Template.bind({});
secondarySmall.args = {
  label: "Secondary Small",
  btnType: "secondary",
  size: "small",
};

export const tertiaryMedium = Template.bind({});
tertiaryMedium.args = {
  label: "Tertiary Medium",
  btnType: "tertiary",
  size: "medium",
};

export const quaternaryMedium = Template.bind({});
quaternaryMedium.args = {
  label: "Quaternary Medium",
  btnType: "quaternary",
  size: "medium",
};
