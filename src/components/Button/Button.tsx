import React from "react";
import "./Button.scss";

interface ButtonProps {
  label: string;
  btnType?: "primary" | "secondary" | "tertiary" | "quaternary";
  size?: "small" | "medium" | "big";
  fade?: boolean;
  backgroundColor?: string;
  onClick?: () => void;
}

export default function Button ({
  label,
  btnType = "primary",
  size = "medium",
  fade = false,
  backgroundColor,
  ...props
}: ButtonProps) {
  const fadeMode = fade? "btn-fade" : "";
  return (
    <button
      type="button"
      className={`app-button btn-${btnType} btn-${size} ${fadeMode}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
}
