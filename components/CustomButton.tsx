"use client";

import { CustomButtonProps } from "@/types";
import React from "react";

const CustomButton = ({
  title,
  containerStyle,
  btnType,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      type={btnType || "button"}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;
