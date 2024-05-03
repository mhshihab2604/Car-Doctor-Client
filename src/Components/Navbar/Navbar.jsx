import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import useAuth from '../useAuth/useAuth';
import { useState } from "react";
const Navbar = () => {
    const { logout, user } = useAuth();
    const [showDropdown, setShowDropdown] = useState(false)
    console.log(user);
    const handleSignOut = () => {
      setShowDropdown(false)
      logout().then().catch();
    };
    return (
        <div>
            <div className="navbar bg-base-100 mt-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"><path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"/></svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-10">
                            <Link to="/">Home</Link>
                            <Link to="/bookingDetails">Booking Details</Link>  
                            <Link to="/register">Register</Link>                        
                            <Link to="/login">Login</Link>          
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl">
                        <img className="w-16" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10">
                        <Link to="/">Home</Link>                     
                        <Link to="/bookingDetails">Booking Details</Link>                        
                        <Link to="/register">Register</Link>                        
                        <Link to="/login">Login</Link>                        
                    </ul>
                </div>
                {user ? (
          <div className="navbar-end relative space-x-2">
            <div className="lg:tooltip lg:tooltip-left" data-tip={`${user.displayName},${user.email}`}>
              <img
                className="w-10 h-10 rounded-full"
                src={user.photoURL}
                alt=""
                onClick={() => setShowDropdown(!showDropdown)}
              />
            </div>
            <div className={showDropdown ? "userDropDown showDropdown space-y-2" : "userDropDown"} >
                <h1 className="text-xl font-medium">Name:{user.displayName}</h1>
                <h1 className="font-medium">{user.email}</h1>
            </div>
            <button
                onClick={handleSignOut}
                className="p-1 rounded  bg-[#FF3811] text-white border-none">Logout</button>
          </div>
        ) : (
          <div className="navbar-end">
            <Link to="/login">
              <button
                onClick={logout}
                className="btn bg-[#FF3811] text-white border-none"
              >
                Login
              </button>
            </Link>
          </div>
        )}
                <div className="navbar-end">
                  <button className="btn btn-ghost border-2 border-[#ff3811] hover:text-white hover:bg-[#ff3811]">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;