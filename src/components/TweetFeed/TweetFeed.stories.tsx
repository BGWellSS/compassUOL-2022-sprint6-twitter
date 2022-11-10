import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TweetFeed from "./TweetFeed";

export default {
  title: "Components/Tweet feed",
  component: TweetFeed,
} as ComponentMeta<typeof TweetFeed>;

const Template: ComponentStory<typeof TweetFeed> = (args) => <TweetFeed {...args} />;

export const tweetFeedLigth = Template.bind({});
tweetFeedLigth.args = {
  dark: false,
};

export const tweetFeedDark = Template.bind({});
tweetFeedDark.args = {
  dark: true,
};

