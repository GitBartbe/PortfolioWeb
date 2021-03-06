import React from "react";
import "./custom_button.css";

function CustomButton({ children, buttonClass }) {
    
  return (
  <button className={buttonClass}
  >
      {children}
      </button>);
}

export default CustomButton;
