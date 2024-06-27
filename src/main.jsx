import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Project from "./Project/Project.jsx";
import Skill from "./Skills/Skill.jsx";
import {RouterProvider,createHashRouter} from "react-router-dom";


const router = createHashRouter([{
    path:'/',
    element:<App/>,
    children:[
        {
        path:"",
        element:<Home/>
    },
        {
        path:"about",
        element:<About/>
    },
         {
        path:"project",
        element:<Project/>
    },
         {
        path:"Skill",
        element:<Skill/>
    },
    ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
