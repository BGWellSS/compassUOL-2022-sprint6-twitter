import React from "react";
import "./Search.scss";

export interface SearchProps {
  placeholder?: string;
  dark?: boolean;
  onClick?: () => void;
}

export default function Search ({
  placeholder,
  dark = false,
  ...props
}: SearchProps) {

  return (
    <section
      className={`app-search${dark ? " search-dark" : ""}`}
      {...props}
    >
      <img
        src={`/images/icon-search${dark ? "-dark" : ""}.png`}
        alt="search icon"
        className="search-icon"
      />
      <input
        type="text"
        id="imput-search"
        name="search-text"
        placeholder={`${placeholder ? placeholder : "Search Twitter"}`}
        className="imput-search"
      />
    </section>
  );
}
