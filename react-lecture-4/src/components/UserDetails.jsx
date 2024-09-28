import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate('/user')
  }
  return (
    <div className="w-full h-[80vh] bg-zinc-200">
      <div className="container bg-zinc-300 h-[35vh] m-auto mt-1 p-20 flex flex-col justify-center items-center">
      <h1 className="text-4xl text-center font-bold">Username: {name}</h1>
      <p className="text-center">This is a React application.</p>
      <button onClick={goBackHandler} className="px-4 py-2 bg-blue-600 rounded text-zinc-100 mt-10">Go back</button>
      </div>
    </div>
  );
};

export default UserDetails;
