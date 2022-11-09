import React from "react";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import "./Post.scss";

interface PostProps {
  dark?: boolean;
  placeholder?: string;
  onClick?: () => void;
}

export default function Post ({
  dark = false,
  placeholder,
  ...props
}: PostProps) {

  return (
    <section className={`tweet-post${dark ? " post-dark" : ""}`}>
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
            <Button label="Tweet" fade></Button>
          </div>
        </div>
      </div>
    </section>
  );
}
