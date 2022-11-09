import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Footer from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const footer = Template.bind({});
footer.args = {
  title: "Don’t miss what’s happening",
  desc: "People on Twitter are first to know.",
};
