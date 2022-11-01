import React from "react";
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes/routesConfig";

const AppRouter = () => {
  const isAuth = false;
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