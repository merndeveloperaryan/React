import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-red-600 text-white px-6 flex justify-start items-center gap-10 text-2xl font-semibold uppercase">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/friend">Friend</Link>
    </nav>
  );
};

export default Navbar;
