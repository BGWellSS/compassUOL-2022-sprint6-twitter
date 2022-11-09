import React from "react";
import Avatar from "../Avatar/Avatar";
import "./Tweet.scss";

export interface TweetProps {
  userName: string;
  userTagName: string;
  userID: string;
  userURL: string;
  postText: string;
  imageURL?: string;
  dark?: boolean;
  onClick?: () => void;
}

export default function Tweet ({
  userName,
  userTagName,
  userID,
  userURL,
  postText,
  imageURL = "",
  dark = false,
  ...props
}: TweetProps) {

  function imageRender() {
    if (imageURL !== "") {
      return (
        <div className="tweet-image-container">
          <img
            src={imageURL}
            alt="tweet post"
            className="tweet-image"
          />
        </div>
      );
    }
    return;
  }

  return (
    <article className={`tweet-card${dark ? " tweet-dark" : ""}`}>
      <div className="avatar-container">
        <Avatar size="medium" userID={userID} linkURL={userURL}></Avatar>
      </div>
      <div className="tweet-container">
        <header className="tweet-header">
          <h2 className="user-name">{userName}</h2>
          <span className="user-tag">{userTagName}</span>
          <span className="dot-separator">.</span>
          <div className="tweet-post-time">0s</div>
        </header>
        <section className="tweet-content">
          <div className="tweet-text-camp">{postText}</div>
          {imageRender()}
        </section>
        <footer className="tweet-footer">
          <div className="tweet-interactions">
            <div className="interaction-item">
              <input
                type="image"
                src={`/images/icon-comments${dark ? "-dark" : ""}.png`}
                alt="imput icon"
                className="comments-icon"
              />
              <span className="interaction-value comments-number">0</span>
            </div>
            <div className="interaction-item">
              <input
                type="image"
                src={`/images/icon-retweet${dark ? "-dark" : ""}.png`}
                alt="image imput icon"
                className="retweet-icon"
              />
              <span className="interaction-value retweet-number">0</span>
            </div>
            <div className="interaction-item">
              <input
                type="image"
                src={`/images/icon-like${dark ? "-dark" : ""}.png`}
                alt="image imput icon"
                className="like-icon"
              />
              <span className="interaction-value like-number">0</span>
            </div>
            <div className="interaction-item">
              <input
                type="image"
                src={`/images/icon-share${dark ? "-dark" : ""}.png`}
                alt="image imput icon"
                className="share-icon"
              />
              <span className="interaction-value share-number">0</span>
            </div>
          </div>
          <a
            href={userURL}
            className="show-thread">{`Show this thread`}
          </a>
        </footer>
      </div>
    </article>
  );
}
