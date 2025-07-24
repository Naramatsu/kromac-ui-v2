import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "success"
    | "warning"
    | "error"
    | "danger"
    | "info"
    | "night";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  shape?: "default" | "neon";
}

export const Button: React.FC<ButtonProps> = ({
  shape = "default",
  variant = "primary",
  size = "medium",
  className = "",
  children,
  ...props
}) => {
  const classes = [
    `kromac-button`,
    `kromac-button--${shape}`,
    `kromac-button--${variant}`,
    `kromac-button--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
