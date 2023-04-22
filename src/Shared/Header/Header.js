import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { BiSearch } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { AuthContext } from "../../Context/UserContext";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const menuItems = (
    <React.Fragment>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "text-blue-700 text-xl me-3 font-bold"
            : "text-xl me-3 font-bold"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/services"}
        className={({ isActive }) =>
          isActive
            ? "text-blue-700 text-xl me-3 font-bold"
            : "text-xl me-3 font-bold"
        }
      >
        Services
      </NavLink>
      <NavLink
        to={"/Products"}
        className={({ isActive }) =>
          isActive
            ? "text-blue-700 text-xl me-3 font-bold"
            : "text-xl me-3 font-bold"
        }
      >
        Products
      </NavLink>
      <NavLink
        to={"about"}
        className={({ isActive }) =>
          isActive
            ? "text-blue-700 text-xl me-3 font-bold"
            : "text-xl me-3 font-bold"
        }
      >
        About
      </NavLink>
      <NavLink
        to={"/Contact"}
        className={({ isActive }) =>
          isActive
            ? "text-blue-700 text-xl me-3 font-bold"
            : "text-xl me-3 font-bold"
        }
      >
        Contact
      </NavLink>
      {user ? (
        <>
          {" "}
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 text-xl me-3 font-bold"
                : "text-xl me-3 font-bold"
            }
          >
            Dashboard
          </NavLink>
        </>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
  return (
    <div className="navbar bg-base-200 p-3">
      <div className=" sm:hidden">
        {" "}
        <button
          className="inline-flex  items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          onClick={toggleNavbar}
        >
          {!isOpen ? <FaBars /> : <ImCross />}
        </button>
      </div>
      <NavLink to={"/"}>
        <img src={logo} alt="" className="w-2/3" />
      </NavLink>
      <div className="hidden  sm:block sm:ml-6">
        <div className="flex space-x-4">{menuItems}</div>
      </div>

      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </div>
        </div>
      )}
      <div className="navbar-end"></div>
      <Link to={"/dashboard/OrderCollection"}>
        <BsHandbag className="me-3 text-2xl" />
      </Link>

      <BiSearch className="me-3 text-2xl" />
      {user ? (
        <>
          <NavLink
            onClick={logout}
            to={"/login"}
            className="text-xl text-white bg-orange-500 p-2 rounded-xl items-center text-center h-18  font-bold"
          >
            LogOut
          </NavLink>
        </>
      ) : (
        <NavLink
          to={"/login"}
          className="text-xl text-white bg-orange-500 p-2 rounded-xl items-center text-center h-18  font-bold"
        >
          Login
        </NavLink>
      )}
      <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
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
    </div>
  );
};

export default Header;
