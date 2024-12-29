import React from "react";
import Logo from "./Logo";
import CategoryBar from "./CategoryBar";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";
import UserActions from "./UserActions";
import Basket from "./Basket";

const Header = () => {
  return (
    <div className="container">
      <div className="header  my-8 mx-auto flex items-center justify-between ">
        <Logo />
        <CategoryBar />
        <SearchBar />
        <Navigation />
        <Basket />
        <UserActions />
      </div>
    </div>
  );
};

export default Header;
