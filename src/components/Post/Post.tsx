import React, { useState } from "react";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import { TweetProps } from "../Tweet/Tweet";
import "./Post.scss";

interface PostProps {
  dark?: boolean;
  placeholder?: string;
  setTweets?: React.Dispatch<React.SetStateAction<TweetProps[]>>
  onClick?: () => void;
}

export default function Post ({
  dark = false,
  placeholder,
  setTweets,
  ...props
}: PostProps) {
  const [tweetInputText, setInputText] = useState("");

  function createTweet() {
    if(setTweets) {
      setTweets(oldTweets => [
        {
          userName: "User Name",
          userTagName: "@tagname",
          userID: "default",
          userURL: "/404.html",
          postText: tweetInputText,
          dark: dark
        },
        ...oldTweets,
      ]);
    }
    setInputText("");
  }

  return (
    <section
      className={`tweet-post${dark ? " post-dark" : ""}`}
      {...props}
    >
      <div className="avatar-container">
        <Avatar></Avatar>
      </div>
      <div className="post-imput-container">
        <input 
          type = "text"
          id = "post-aria"
          name = "post-text"
          placeholder = {`${placeholder ? placeholder : "What’s happening?"}`}
          maxLength = {380}
          className="text-imput"
          value={tweetInputText}
          onChange={event => setInputText(event.target.value)}
        />
        <div className="menu-container">
          <div className="post-menu-icons">
            <input type="image" src="/images/icon-image-submit.png" alt="image imput icon" width="24" height="24"/>
            <input type="image" src="/images/icon-gif-submit.png" alt="gif imput icon" width="24" height="24"/>
            <input type="image" src="/images/icon-poll-submit.png" alt="poll imput icon" width="24" height="24"/>
            <input type="image" src="/images/icon-emogi-submit.png" alt="emogi imput icon" width="24" height="24"/>
            <input type="image" src="/images/icon-schedule-submit.png" alt="schedule imput icon" width="24" height="24"/>
          </div>
          <div className="button-container">
            <Button label="Tweet" fade onClick={createTweet}></Button>
          </div>
        </div>
      </div>
    </section>
  );
}
