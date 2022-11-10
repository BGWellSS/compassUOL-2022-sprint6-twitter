import React from "react";
import "./Avatar.scss";

interface AvatarProps {
  size?: "small" | "medium";
  userID?: string;
  linkURL?: string;
  onClick?: () => void;
}

export default function Avatar ({
  size = "medium",
  userID = "",
  linkURL = "/404.html",
  ...props
}: AvatarProps) {
  const userValue: string = userID ? userID : "default";
  return (
    <a href={linkURL}>
      <picture
        className={`avatar image-container`}
      >
        <img 
          src={`/images/avatar-${userValue}-${size}.png`}
          alt={`avatar`}
          className={`avatar-image avatar-image-${size}`}
        />
      </picture>
    </a>
  );
}
