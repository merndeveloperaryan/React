import axios from "../utilities/Axios";
import React from "react";

const Provider = () => {
  const sendData = () => {
    // replace with your API endpoint
    axios
      .post("/products", {
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      })
      .then((res) => {
        alert("data send ho gya hai");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full h-[80vh] bg-zinc-200">
      <div className="container bg-zinc-300 h-[50vh] m-auto mt-1 p-20 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center font-bold">
          Welcome to data provider page!
        </h1>
        <p className="text-center">This is a React application.</p>
        <button
          className="px-4 py-2 bg-blue-600 rounded text-zinc-100 mt-10"
          onClick={sendData}
        >
          Provider
        </button>
      </div>
    </div>
  );
};

export default Provider;
