import {Link, NavLink}  from "react-router-dom";

function  Navbar(){
    return (
            <nav
                className="bg-white h-1/10 w-full top-0 start-0  pb-2 pt-2 border">
                <div className=" h-full grid  grid-cols-13  justify-items-center items-center">
                    <Link className="col-start-1" to="/">
                        <div >
                            <span className="ps-3 pe-2 p-0.5 text-3xl text-rose-600 sm:text-2xl">Yatin</span><span className="text-3xl sm:text-2xl  font-sans font-medium text-gray-600">Aggarwal</span>
                        </div>
                    </Link>
                    <div className=" col-end-13  grid grid-cols-4 ">
                        <NavLink to="/" className={({isActive})=> `${isActive? "text-rose-600":"text-gray-600"} font-semibold`}>HOME</NavLink>
                        <NavLink to="/about" className={({isActive})=> `${isActive? "text-rose-600":"text-gray-600"} font-semibold `}>ABOUT</NavLink>
                        <NavLink to="/skill"className={({isActive})=> `${isActive? "text-rose-600":"text-gray-600"} font-semibold `}>SKILLS</NavLink>
                        <NavLink to="/project" className={({isActive})=> `${isActive? "text-rose-600":"text-gray-600"} font-semibold `}>PROJECTS</NavLink>
                    </div>
                </div>
            </nav>
    )

}

export default Navbar