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
  tweets,
  ...props
}: TweetFeedProps) {
  
  return (
    <section
      className={`tweet-feed${dark ? " tweet-feed-dark" : ""}`}
      {...props}
    >
      {tweets
        ? tweets.map(item => (
            <Tweet {...item}></Tweet>
          ))
        : ""
      }
    </section>
  );
}
