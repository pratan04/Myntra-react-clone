import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import {RouterProvider, createBrowserRouter} from 
"react-router-dom"

import { Provider } from 'react-redux'

import Bag from "./routes/Bag.jsx"

import './index.css'

import Home from './routes/Home.jsx'
import myntraStore from './store/index.js'
import "bootstrap/dist/css/bootstrap.min.css"



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
    <Provider store={myntraStore}>
    
    <RouterProvider router={router}/>

    </Provider>
   
  </React.StrictMode>,
)
