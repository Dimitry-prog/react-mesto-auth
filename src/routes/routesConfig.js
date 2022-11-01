import MainLayout from "../components/MainLayout";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import {Navigate} from "react-router-dom";

export const publicRoutes = [
  {
    path: '/sign-up',
    element: <SignUp/>
  },
  {
    path: '/sign-in',
    element: <SignIn/>
  },
  {
    path: '*',
    element: <Navigate to='/sign-up'/>
  }
];

export const privateRoutes = [
  {
    path: '/',
    element: <MainLayout/>
  },
  {
    path: '*',
    element: <Navigate to='/'/>
  }
];


