import React from "react";
import "./to_do.css";
import WaveTodo from "../../img/Todo_wave.svg";
import CustomButton from "../custom_button/CustomButton";
import MobilePrev from "./mobile_prev/mobile-prev";
import DesktopPrev from "./mobile_prev/desktop-prev/desktop-prev";

export default function ToDo() {
  return (
    <div className="todo-container">
      <div className="left">
        <h1>Todo App</h1>
        <h2>React aplication </h2>
        <div className="app-description">
          <ul>
            <li>Funcionality 1</li>
            <li>Funcionality 1</li>
            <li>Funcionality 1</li>
          </ul>
        </div>
        <div className="app-buttons">
          <CustomButton buttonClass={"primary ghost"}>Get Code</CustomButton>
        </div>
      </div>
            
     
      <img id="wave" src={WaveTodo} />
    </div>
  );
}
