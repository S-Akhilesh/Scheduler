import React from "react";
import "./Header.css";
export const Header = () => {
  return (
    <div className="header">
      <button className="header__button">Signin</button>
      <button className="header__button">Logout</button>
    </div>
  );
};
