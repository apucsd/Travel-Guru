import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  // console.log(location.pathname);

  return (
    <div
      className={`${
        location.pathname.includes("/authentication")
          ? "text-black"
          : "text-white"
      }`}
    >
      <div className="flex items-center justify-around py-3">
        {/* 2 div == 1 is title 1 is link and search */}
        <div>
          <h3 className="text-3xl font-mono font-semibold">
            Travel <br /> Guru
          </h3>
        </div>
        <div className="flex items-center  gap-8">
          <input
            type="text"
            placeholder="Search your destination..."
            className={`input  bg-transparent border border-yellow-500 ${
              location.pathname == "/authentication/login"
                ? "text-black"
                : "text-white"
            }`}
          />
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline text-blue-600" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline text-blue-600" : ""
            }
          >
            News
          </NavLink>
          <NavLink
            to="/destination/1"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline text-blue-600" : ""
            }
          >
            Destination
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline text-blue-600" : ""
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline text-blue-600" : ""
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/authentication/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline text-blue-600" : ""
            }
          >
            <button className="btn btn-warning px-7"> Login</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
