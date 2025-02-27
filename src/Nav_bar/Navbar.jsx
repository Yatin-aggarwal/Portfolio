import {Link, NavLink}  from "react-router-dom";
import {useState} from "react";

function  Navbar(){
    const [active , set] = useState(1);
    return (

            <nav
                className="bg-white border">
                <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link className="col-start-1" to="/">
                        <div>
                            <span className="self-center text-3xl font-semibold whitespace-nowrap fo  text-rose-600 ">Yatin </span><span
                            className="teself-center text-3xl font-semibold whitespace-nowrap  text-gray-600"> Aggarwal</span>
                        </div>
                    </Link>
                    <button data-collapse="navbar-default" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-default" aria-expanded="false" onClick={()=>{ set(!active)}}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 17 14">
                            <path stroke="currentColor"
                                  d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>

                    </button>
                    <div className={ `${active?"hidden":""}  w-full md:block md:w-auto  `}
                         id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
                            <li>
                                <NavLink to="/"
                                         className={({isActive}) => `${isActive ? "text-rose-600" : "text-gray-600"} block py-2 px-3  md:text-lg md:font-semibold rounded md:bg-transparent  md:p-0 `}
                                         aria-current="page">HOME</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about"
                                         className={({isActive}) => `${isActive ? "text-rose-600" : "text-gray-600"} block py-2 px-3  md:text-lg md:font-semibold rounded md:bg-transparent  md:p-0 `}
                                         aria-current="page">ABOUT</NavLink>
                            </li>
                            <li>
                               <NavLink to="/skill"
                                         className={({isActive}) => `${isActive ? "text-rose-600" : "text-gray-600"} block py-2 px-3  md:text-lg md:font-semibold rounded md:bg-transparent  md:p-0 `}
                                         aria-current="page">SKILLS</NavLink>
                            </li>
                            <li>
                                <NavLink to="/project"
                                         className={({isActive}) => `${isActive ? "text-rose-600" : "text-gray-600"} block py-2 px-3  md:text-lg md:font-semibold rounded md:bg-transparent  md:p-0 `}
                                         aria-current="page">PROJECTS</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )

}

export default Navbar