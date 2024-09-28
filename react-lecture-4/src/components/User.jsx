import axios from "../utilities/Axios";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);
  const fetchData = () => {
    
    axios
      .get("/products")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full h-[80vh] bg-zinc-200">
      <div className="container bg-zinc-300 h-[50vh] m-auto mt-1 p-20 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center font-bold">Welcome User page!</h1>
        <p className="text-center">This is a React application.</p>
        {/* <button className="px-4 py-2 bg-blue-600 rounded text-zinc-100 mt-10" onClick={fetchData}>See more</button> */}
        <Link
          className="px-4 py-2 bg-blue-600 rounded text-zinc-100 mt-10"
          to="/user/account"
        >
          My account
        </Link>
      </div>
      <hr />
      <hr />
      <div className="container bg-zinc-300 h-[35vh] m-auto mt-1 p-20 flex flex-col justify-center items-center">
        <Outlet />
        <ul>
          {users.map((items, index) => (
            <li key={index}>{items.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default User;
