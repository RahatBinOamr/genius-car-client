import React from "react";
import Header from "../../Shared/Header/Header";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <Header />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80">
            <li className="shadow-2xl bg-gray-100 mb-3 text-orange-400 font-bold text-xl">
              <NavLink
                to="/dashboard/addNewService"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 text-xl  font-bold"
                    : " text-orange-400 text-xl  font-bold "
                }
              >
                Add New Service
              </NavLink>
            </li>
            <li className="shadow-2xl bg-gray-100 mb-3 text-orange-400 font-bold text-xl">
              <NavLink
                to="/dashboard/addProduct"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 text-xl  font-bold"
                    : " text-orange-400 text-xl  font-bold "
                }
              >
                Add New Product
              </NavLink>
            </li>
            <li className=" shadow-2xl bg-gray-100 mb-3 text-orange-400 font-bold text-xl">
              <NavLink
                to="/dashboard/OrderCollection"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 text-xl  font-bold"
                    : " text-orange-400 text-xl  font-bold "
                }
              >
                Service Order Collection
              </NavLink>
            </li>
            <li className=" shadow-2xl bg-gray-100 mb-3 text-orange-400 font-bold text-xl">
              <NavLink
                to="/dashboard/MessageCollection"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 text-xl  font-bold"
                    : " text-orange-400 text-xl  font-bold "
                }
              >
                Contact Collection
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
