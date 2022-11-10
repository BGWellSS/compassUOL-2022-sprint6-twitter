import React from "react";
import "./Header.scss";

export interface HeaderProps {
  label: string;
  dark?: boolean;
  onClick?: () => void;
}

export default function Header ({
  label,
  dark = false,
  ...props
}: HeaderProps) {
  function changeTheme() {
  }

  return (
    <header 
      className={`page-header${dark ? " header-dark" : ""}`}
      {...props}
    >
      <h1 className={`header-title`}>{label}</h1>
      <picture className={`image-container`}>
        <img
          src="/images/icon-theme-selector.png"
          alt="theme selector"
          className={`theme-icon`}
          onClick={changeTheme}
        />
      </picture>
    </header>
  );
}
