import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {AppProvider} from "./context/AppContext";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={`/react-mesto-auth/`}>
      <AppProvider>
        <App/>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);

