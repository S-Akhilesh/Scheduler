import React from "react";
import "./Header.css";
export const Header = () => {
  return (
    <div className="header">
      <img src="https://affle.com/images/Logo_Blue.png" alt="logo" />
      <button className="header__button">Logout</button>
    </div>
  );
};
