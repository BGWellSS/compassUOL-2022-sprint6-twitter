import React from "react";
import "./Spacer.scss";

export interface SpacerProps {
  dark?: boolean;
  onClick?: () => void;
}

export default function Spacer ({
  dark = false,
  ...props
}: SpacerProps) {

  return (
    <div className={`spacer${dark ? " spacer-dark" : ""}`}></div>
  );
}
