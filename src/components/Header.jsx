import React from "react";
import logo from '../images/logo.svg';
import { Link, Route, Routes } from "react-router-dom";
import {useAppContext} from "../context/AppContext";

const Header = () => {
  const {isAuth, userInfo, setIsAuth, isOpenSidebar, setIsOpenSidebar} = useAppContext();

  const logOut = () => {
    setIsAuth(false);
    localStorage.removeItem('token');
  }

  return (
    <header className="header page__header">
      <img src={logo} alt="header logo" className="logo header__logo"/>

      <Routes>
        <Route
          path="/sign-up"
          element={
            <Link to="/sign-in" className="header__link">
              Войти
            </Link>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Link to="/sign-up" className="header__link">
              Регистрация
            </Link>
          }
        />
      </Routes>

      {isAuth && (
        <div>
          <div className="header__info">
            <p className="header__email">{userInfo.email}</p>
            <Link
              to="/sign-in"
              onClick={logOut}
              className="header__link header__link_logout"
            >Выйти</Link>
          </div>
          <button
            onClick={() => setIsOpenSidebar(!isOpenSidebar)}
            className="burger"
          >
          <span
            className={`burger__line ${isOpenSidebar ? "burger__line_active" : ""}`}
          ></span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;