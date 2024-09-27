import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full h-[10vh] bg-rose-600 flex justify-start items-center px-5 gap-4">
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-green-600" : "",
            e.isActive ? "font-semibold" : "",
          ].join(" ");
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/user">User</NavLink>
    </div>
  );
};

export default Nav;
