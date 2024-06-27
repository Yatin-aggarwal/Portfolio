import './App.css'
import Navbar from "./Nav_bar/Navbar.jsx";
import {Outlet} from "react-router-dom";

function App() {

  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default App
