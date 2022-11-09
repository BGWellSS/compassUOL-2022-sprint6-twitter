import React from "react";
import Tweet, { TweetProps } from "../Tweet/Tweet";
import "./TweetFeed.scss";

export interface TweetFeedProps {
  tweets?: TweetProps[],
  dark?: boolean;
  onClick?: () => void;
}

export default function TweetFeed ({
  dark = false,
  tweets = [
    {
      userName: "User Name",
      userTagName: "@tagname",
      userID: "1",
      userURL: "/404.html",
      postText: "Tom is in a big hurry.",
      imageURL: "/images/post-image-default.png",
      dark: dark,},
    {
      userName: "User Name",
      userTagName: "@tagname",
      userID: "2",
      userURL: "/404.html",
      postText: "Tom is in a big hurry.",
      imageURL: "/images/post-image-01.png",
      dark: dark,
    }
  ],
  ...props
}: TweetFeedProps) {
  return (
    <section
      className={`tweet-feed${dark ? " tweet-feed-dark" : ""}`}
      {...props}
    >
      {tweets.map(item => (
        <Tweet {...item}></Tweet>
      ))}
    </section>
  );
}
