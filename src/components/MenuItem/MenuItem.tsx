import React from "react";
import "./MenuItem.scss";

export interface MenuItemProps {
  iconName:
    | "logo"
    | "home"
    | "explore"
    | "notifications"
    | "messages"
    | "bookmarks"
    | "lists"
    | "profile"
    | "more";
  label?: string;
  linkURL?: string;
  dark?: boolean;
  selected?: boolean;
  onClick?: () => void;
}

export default function MenuItem ({
  label,
  iconName,
  linkURL = "/404.html",
  dark = false,
  selected = false,
  ...props
}: MenuItemProps) {
  
  if (selected) {
    return (
      <li
        className={`menu-item${selected ? " menu-selected" : ""}`}
        {...props}
      >
        <a
          href={`${linkURL ? linkURL : ""}`}
        >
          <picture className="image-container">
            <img 
              src={`/images/icon-${iconName}${selected ? "-selected" : ""}.svg`}
              alt={`${iconName} menu icon`}
              className="menu-icon"
            />
          </picture>
          <span
            className="label"
          >
            {label ? label : ""}
          </span>
        </a>
      </li>
    );
  }
  return (
    <li
      className={`menu-item${dark ? " menu-dark" : ""}`}
      {...props}
    >
      <a
        href={`${linkURL ? linkURL : ""}`}
      >
        <picture className="image-container">
          <img
            src={`/images/icon-${iconName}${dark ? "-dark" : ""}.svg`}
            alt={`${iconName} menu icon`}
            className="menu-icon"
          />
        </picture>
        <span
          className="label"
        >
          {label ? label : ""}
        </span>
      </a>
    </li>
  );
}
