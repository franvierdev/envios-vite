import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Calculadora } from './calculadora.jsx'
import { Prices } from './Prices.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { SideBar } from './sidebar.jsx'
import { Bancos } from './Bancos.jsx'
import { Dia } from './Dia.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1 className='text-7xl '>Error</h1>,
    children: [
      {
        path: "/sidebar",
        element: <SideBar />,
      },

      {
        path: "/calculadora",
        element: <Calculadora />,
      },
      {
        path: "/prices",
        element: <Prices />,
      },
      , {
        path: "/bancos",
        element: <Bancos />,
      },
    ],
  }



]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
