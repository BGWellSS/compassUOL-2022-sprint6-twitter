import React from "react";
import Button from "../Button/Button";
import "./Footer.scss";

export interface FooterProps {
  title: string;
  desc: string;
  onClick?: () => void;
}

export default function Footer ({
  title,
  desc,
  ...props
}: FooterProps) {
  return (
    <footer 
      className={`page-footer`}
      {...props}
    >
      <div className={`footer-content`}>
        <h4 className={`footer-title`}>
          {title}
        </h4>
        <p className={`footer-desc`}>
          {desc}
        </p>
      </div>
      <div className={`footer-buttons`}>
        <div className={`button-item`}>
          <Button label="Log in" btnType="quaternary"></Button>
        </div>
        <div className={`button-item`}>
          <Button label="Sign up" btnType="tertiary"></Button>
        </div>
      </div>
    </footer>
  );
}
