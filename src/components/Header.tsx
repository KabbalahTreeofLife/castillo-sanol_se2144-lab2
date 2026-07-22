import React from "react";
import CartIcon from "./CartIcon";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">GearHub</h1>
      <CartIcon />
    </header>
  );
};

export default Header;
