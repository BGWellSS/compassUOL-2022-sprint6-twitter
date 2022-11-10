import React from "react";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import "./Profile.scss";

export interface ProfileProps {
  userName: string;
  userTagName: string;
  profileType: "basic" | "follow";
  dark?: boolean;
  userID?: string;
  linkURL?: string;
  onClick?: () => void;
}

export default function Profile ({
  userName,
  userTagName,
  profileType,
  dark = false,
  userID = "default",
  linkURL = "/404.html",
  ...props
}: ProfileProps) {
  function profileButton() {
    if (profileType === "basic") {
      return (
        <a 
          href = {linkURL}
        >
          <img
            src={`/images/icon-config${dark ? "-dark" : ""}.png`}
            alt="config icon"
            className={`config-icon`}
          />
        </a>
      );
    }
    return (
      <a href = {linkURL}>
        <Button label="Follow" btnType="secondary" size="small"></Button>
      </a>
    );
  }

  return (
    <article
      className={`profile${dark ? " profile-dark" : ""}`}
      {...props}
    >
      <Avatar
        size={profileType === "basic" ? "small" : "medium"}
        userID={userID}
        linkURL={linkURL}
      ></Avatar>
      <div className={`profile-content`}>
        <p className={`user-name`}>{userName}</p>
        <p className={`user-tagname`}>{userTagName}</p>
      </div>
      <div className={`profile-button`}>
        { profileButton() }
      </div>
    </article>
  );
}
