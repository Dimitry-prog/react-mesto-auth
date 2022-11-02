import React from "react";
import {Link} from "react-router-dom";
import {useAppContext} from "../context/AppContext";

const Sidebar = () => {
  const {userInfo, setIsAuth, isOpenSidebar, setIsOpenSidebar} = useAppContext();

  return (
    <div className={`sidebar ${isOpenSidebar ? 'sidebar_show' : ''}`}>
      <p className='sidebar__email'>{userInfo.email}</p>
      <Link
        to='/sign-in'
        onClick={() => {
          setIsAuth(false);
          setIsOpenSidebar(false);
        }}
        className='sidebar__link'
      >Выйти</Link>
    </div>
  );
};

export default Sidebar;