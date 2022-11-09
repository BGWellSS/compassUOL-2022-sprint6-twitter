import React from "react";
import Button from "../Button/Button";
import MenuItem, { MenuItemProps } from "../MenuItem/MenuItem";
import Profile from "../Profile/Profile";
import "./Menu.scss";

interface MenuProps {
  dark?: boolean;
  onClick?: () => void;
}

export default function Menu ({
  dark = false,
  ...props
}: MenuProps) {
  const menuItems: MenuItemProps[] = [
    {
      iconName: "logo",
      linkURL: "/",
      selected: true,
    },
    {
      iconName: "home",
      label: "Home",
      linkURL: "/",
      dark: dark ? dark : false,
      selected: true,
    },
    {
      iconName: "explore",
      label: "Explore",
      linkURL: "/404.html",
      dark: dark ? dark : false,
    },
    {
      iconName: "notifications",
      label: "Notifications",
      linkURL: "/404.html",
      dark: dark ? dark : false,
    },
    {
      iconName: "messages",
      label: "Messages",
      linkURL: "/404.html",
      dark: dark ? dark : false,
    },
    {
      iconName: "bookmarks",
      label: "Bookmarks",
      linkURL: "/404.html",
      dark: dark ? dark : false,
    },
    {
      iconName: "lists",
      label: "Lists",
      linkURL: "/404.html",
      dark: dark ? dark : false,
    },
    {
      iconName: "profile",
      label: "Profile",
      linkURL: "/404.html",
      dark: dark ? dark : false,
    },
    {
      iconName: "more",
      label: "More",
      linkURL: "/404.html",
      dark: dark ? dark : false,
    }
  ];

  return (
    <aside
      className={`aside-menu aside-container${dark ? " menu-dark" : ""}`}
      {...props}
    >
      <ul>
        {menuItems.map(item => (
          <MenuItem {...item}></MenuItem>
        ))}
      </ul>
      <Button label="Tweet" btnType="primary" size="big"></Button>
      <Profile userName="User Name" userTagName="@tagname" profileType="basic"></Profile>
    </aside>
  );
}
