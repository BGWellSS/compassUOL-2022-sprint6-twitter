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
  // -- States
  const [tweetInputText, setInputText] = useState("");
  const [fileUploaded, setFileUpload] = useState<File | null>(null);

  function createTweet() {
    if(tweetInputText !== "") {
      if(setTweets) {
        setTweets(oldTweets => [
          {
            userName: "User Name",
            userTagName: "@tagname",
            userID: "default",
            userURL: "/404.html",
            postText: tweetInputText,
            imageURL: "/images/post-image-"+fileUploaded?.name,
            dark: dark
          },
          ...oldTweets,
        ]);
      }
      setInputText("");
      setFileUpload(null);
    }
  }

  function clickToUploadFile() {
    const fileDOM = document.getElementById("imageUploader");
    fileDOM?.click();
  }
  function changeFileState(event: React.ChangeEvent<HTMLInputElement>) {
    if(event.target.files)
      setFileUpload(event.target.files[0]);
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
            <input type="file" id="imageUploader" accept='image/*' onChange={event => changeFileState(event)}/>
            <input type="image" src="/images/icon-image-submit.png" alt="image icon" width="24" height="24" onClick={clickToUploadFile}/>
            <input type="image" src="/images/icon-gif-submit.png" alt="gif icon" width="24" height="24"/>
            <input type="image" src="/images/icon-poll-submit.png" alt="poll icon" width="24" height="24"/>
            <input type="image" src="/images/icon-emogi-submit.png" alt="emogi icon" width="24" height="24"/>
            <input type="image" src="/images/icon-schedule-submit.png" alt="schedule icon" width="24" height="24"/>
          </div>
          <div className="button-container">
            <Button label="Tweet" fade onClick={createTweet}></Button>
          </div>
        </div>
      </div>
    </section>
  );
}
