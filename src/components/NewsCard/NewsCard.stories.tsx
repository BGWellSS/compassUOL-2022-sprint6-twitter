import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NewsCard from "./NewsCard";

export default {
  title: "Components/News item",
  component: NewsCard,
} as ComponentMeta<typeof NewsCard>;

const Template: ComponentStory<typeof NewsCard> = (args) => <NewsCard {...args} />;

export const newsCardLigth = Template.bind({});
newsCardLigth.args = {
  idCard: "default",
  title: "COVID19",
  time: "Last night",
  textContent:
    "England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic",
  tags: "#covid19",
  dark: false,
};

export const newsCardDark = Template.bind({});
newsCardDark.args = {
  idCard: "1",
  title: "US news",
  time: "4h ago",
  textContent:
    "Parler may go offline following suspensions by Amazon, Apple and Google",
  tags: "#trump",
  dark: true,
};
