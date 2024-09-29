import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[10vh] bg-zinc-300 flex justify-start items-center gap-10 px-10">
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-zinc-700 border-b-2 border-zinc-900" : "",
          ].join(" ");
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-zinc-700 border-b-2 border-zinc-900" : "",
          ].join(" ");
        }}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-zinc-700 border-b-2 border-zinc-900" : "",
          ].join(" ");
        }}
        to="/user"
      >
        User
      </NavLink>
      
    </div>
  );
};

export default Navbar;
