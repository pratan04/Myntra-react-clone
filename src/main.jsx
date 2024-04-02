import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import {RouterProvider, createBrowserRouter} from "react-router-dom"

import Bag from "./routes/Bag.jsx"

import './index.css'

import Home from './routes/Home.jsx'



  const router=createBrowserRouter([

    {
      path: "/",
      element:<App/>,
      children:[
        {
          path: "/",
          element:<Home/>,
        },
        {
          path: "/Bag",
          element:<Bag/>,
        },
        // {
        //   path: "/Home",
        //   element:<Home/>,
        // }
      ]
    }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
   
  </React.StrictMode>,
)
