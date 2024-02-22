import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { SignUp, Login, AddGame, Home } from './components/index.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children: [
      {
        path: "/SignUp",
        element: <SignUp /> ,
      },
      {
        path: "/Login",
        element: <Login /> ,
      },
      {
        path: "/AddGame",
        element: <AddGame /> ,
      },
      {
        path: "/Home",
        element: <Home /> ,
      },
    ],
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
