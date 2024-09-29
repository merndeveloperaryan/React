import React, { useContext } from "react";
import { UserContext } from "../utilities/Context";
import { Link } from "react-router-dom";

const User = () => {
  const { users } = useContext(UserContext);

  return (
    <div className='w-full h-[50vh] bg-zinc-200"'>
      <div className="container bg-zinc-300 h-[50vh] m-auto mt-20 p-20 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center font-bold">All Users are here</h1>
        <p className="text-center">This is a React application.</p>
      </div>
      <div className="container h-[20vh] bg-zinc-400 mx-auto flex gap-20 items-center justify-center">
        {users.map((item) => (
          <Link className="px-4 py-2 bg-zinc-600 rounded text-sm text-zinc-50" to={`/user/${item.id}`} key={item.id}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default User;
