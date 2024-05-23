import App from './App.jsx'
import './index.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Rungpeakshop from './patthai/patthairungpeakshop.jsx'
import AoilyShop from './pages/Shops/AoilyShop.jsx';
import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/rungpeakshop',
    element: <Rungpeakshop/>
  },
  {
    path: '/AoilyShop',
    element: <AoilyShop/>
  },
  {
    path: '/Login',
    element: <Login/>
  },
  {
    path: '/Register',
    element: <Register/>
  },
  
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);