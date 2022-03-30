import React from "react";
import "./input.css";

type InputProps = {
  type: string;
  placeholder: string;
  size: "large" | "medium" | "small";
};

export const Input = ({ type, placeholder, size }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      className={["input", `input--${size || 'large'}`].join(' ')}
    />
  );
};
