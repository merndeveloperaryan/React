import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="bg-orange-200 w-full h-[90vh]">
      <h1 className="text-center pt-5">Users</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora natus
        architecto id magni quam, dolores et voluptatem voluptatum, dignissimos
        magnam fugit labore eligendi.
      </p>
      <div>
        <Link to="/user/abhay">Abhay</Link>
        <Link to="/user/anuj">Anuj</Link>
        <Link to="/user/ankit">Ankit</Link>
        <Link to="/user/kenichi">Kenichi</Link>
        <Link to="/user/doremon">Doremon</Link>
      </div>
    </div>
  );
};

export default User;
