import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../utilities/Context";

const Show = () => {
  const { id } = useParams();
  const { users } = useContext(UserContext);
  // find is a second method.
  // const user = users.find(user => user.id === parseInt(id))

  const navigate = useNavigate();
  return (
    <div className='w-full h-[50vh] bg-zinc-200"'>
      <div className="container bg-zinc-300 h-[50vh] m-auto mt-20 p-20 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center font-bold">
          Welcome {users[id].name}
        </h1>
        <p className="text-center">{users[id].email}</p>
        <button
          onClick={() => navigate("/user")}
          className="px-4 py-2 bg-zinc-600 rounded text-sm text-zinc-50 mt-5"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Show;
