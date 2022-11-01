import React from "react";
import logo from '../images/logo.svg';

const Header = () => {
  return (
    <header className="header page__header">
      <img src={logo} alt="header logo" className="logo header__logo"/>
      <button
        className='burger'
      >
          <span
            className='burger__line'
          ></span>
      </button>
    </header>
  );
};

export default Header;