import React, {useState} from "react";
import logo from '../images/logo.svg';
import {Link, useLocation} from "react-router-dom";
import {useAppContext} from "../context/AppContext";

const Header = () => {
  const {pathname} = useLocation();
  const {isAuth, userInfo, setIsAuth, isOpenSidebar, setIsOpenSidebar} = useAppContext();

  return (
    <header className="header page__header">
      <img src={logo} alt="header logo" className="logo header__logo"/>
      {pathname === '/sign-up' ? (
        <Link to='/sign-in' className='header__link'>Войти</Link>
      ) : pathname === '/sign-in' ? (
        <Link to='/sign-up' className='header__link'>Регистрация</Link>
      ) : (
        ''
      )}
      {isAuth && (
        <div>
          <div className='header__info'>
            <p className='header__email'>{userInfo.email}</p>
            <Link
              to='/sign-in'
              onClick={() => setIsAuth(false)}
              className='header__link header__link_logout'
            >Выйти</Link>
          </div>
          <button
            onClick={() => setIsOpenSidebar(!isOpenSidebar)}
            className="burger"
          >
          <span
            className={`burger__line ${isOpenSidebar ? 'burger__line_active' : ''}`}
          ></span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;