import React from "react";
import Profile, { ProfileProps } from "../Profile/Profile";
import "./Follow.scss";

export interface FollowProps {
  dark?: boolean;
  onClick?: () => void;
}

export default function Follow ({
  dark = false,
  ...props
}: FollowProps) {

  const profilesDefault: ProfileProps[] = [{
    userName: "Bessie Cooper",
      userTagName: "@alessandroveronezi",
      profileType: "follow",
      dark: dark,
      userID: "1",
      linkURL: "/404.html",
  },{
    userName: "Jenny Wilson",
      userTagName: "@gabrielcantarin",
      profileType: "follow",
      dark: dark,
      userID: "2",
      linkURL: "/404.html",
  }];

  return (
    <section
      className={`follow-section${dark ? " follow-section-dark" : ""}`}
      {...props}
    >
      <header className="follow-section-header">
        <h3 className="section-title">Who to follow</h3>
      </header>
      <div className="profiles-container">
        {profilesDefault.map(item => (
          <Profile {...item}></Profile>
        ))}
      </div>
      <footer className="follow-section-footer">
        <a href="/404.html" className="follow-showmore">Show more</a>
      </footer>
    </section>
  );
}
