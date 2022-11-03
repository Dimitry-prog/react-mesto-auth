import React, {useEffect} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes/routesConfig";
import {useAppContext} from "../context/AppContext";
import {checkUserToken} from "../utils/authentication";

const AppRouter = () => {
  const {isAuth, setIsAuth} = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      checkUserToken(token)
        .then(res => {
          setIsAuth(true);
          navigate('/');
        })
    }
  }, []);

  return (
    isAuth
      ? (
        <Routes>
          {privateRoutes.map((route,index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route,index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      )
  );
};

export default AppRouter;