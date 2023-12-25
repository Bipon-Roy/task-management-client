import { Link, NavLink } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";
import logo from "../../../assets/logo.png";

import "./Navbar.css";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const links = (
        <>
            <li className="mr-5 font-medium">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="mr-5 font-medium">
                <NavLink to="/about">About</NavLink>
            </li>
            <li className="mr-5 font-medium">
                <NavLink to="/contact">Contact Us</NavLink>
            </li>
            {user && (
                <>
                    <li className="mr-5 font-medium">
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                </>
            )}
        </>
    );
    const handleLogout = () => {
        logOut()
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="shadow-lg">
            <nav className="navbar max-w-7xl mx-auto pr-6 lg:px-0 lg:py-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost p-1 lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 25 25"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white  rounded-box w-52"
                        >
                            {links}
                        </ul>
                    </div>
                    <div className="flex gap-1 items-center py-1">
                        <img src={logo} className="h-10 md:h-13 lg:h-[60px] p-2" alt="NavLogo" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal font-normal px-1 font">{links}</ul>
                </div>
                <div className="navbar-end">
                    <div>
                        <Link
                            to="/login"
                            className={`flex items-center gap-1 text-blue-600 underline font-bold ${
                                user ? "hidden" : ""
                            }`}
                        >
                            Login
                            <BiLogInCircle className="text-lg" />
                        </Link>
                    </div>
                    {user && (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 lg:w-12 rounded-full">
                                    <img
                                        className="rounded-full"
                                        src={user.photoURL}
                                        alt={user.displayName}
                                    />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="mt-3 z-[1] p-2 shadow-md menu menu-sm dropdown-content bg-base-100 border w-52 "
                            >
                                <li>
                                    <p className="text-xs md:text-base font-bold ">
                                        {user.displayName}
                                    </p>
                                    <button
                                        className="md:px-3 md:py-2 rounded-md font-bold text-xs  md:text-base text-red-500"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
