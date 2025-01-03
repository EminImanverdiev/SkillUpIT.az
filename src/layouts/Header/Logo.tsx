import React from "react";
import logo from "../../assets/images/logo-black.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="logo" width={120} className="border-r pr-6 p-1" />
      </Link>
    </div>
  );
};

export default Logo;
