import React from "react";
import logo from '../images/logo.svg';

const Header = () => {
  return (
    <header className="header page__header">
      <img src={logo} alt="header logo" className="logo header__logo"/>
    </header>
  );
};

export default Header;