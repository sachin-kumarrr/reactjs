import React from "react";
import "./Header.css";
import logo from "./assets/images/logo.svg";
import profile from "./assets/images/user.jpg";

function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <img src={logo} alt="Instagram_logo" />
      </div>
      <div className="header_profile_pic">
        <img src={profile} alt="Profile pic" />
      </div>
    </div>
  );
}

export default Header;
