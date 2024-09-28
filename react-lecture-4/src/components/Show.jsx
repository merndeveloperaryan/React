import axios from "../utilities/Axios";
import React, { useEffect, useState } from "react";

const Show = () => {
  const [show, setShow] = useState([]);
  const fetchData = () => {
    
    axios
      .get("/products")
      .then((res) => {
        console.log(res);
        setShow(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
    return () => {
      // cleanup
    };
  }, []);
  return (
    <div className="w-full h-[85vh] bg-zinc-200">
      <div className="container bg-zinc-300 h-[40vh] m-auto my-5 p-20 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center font-bold">Welcome Show page!</h1>
        <p className="text-center">This is a React application.</p>
        {/* <button onClick={fetchData} className="px-4 py-2 bg-blue-600 rounded text-zinc-100 mt-10">Show data</button> */}
      </div>
      <div className="container bg-zinc-300 h-[40vh] m-auto p-2 flex flex-col items-center overflow-auto">
        <h1 className="text-lg uppercase text-center font-bold">
          data appear here
        </h1>
        <ul className="bg-green-500">
          {show.map((items, ind) => (
            <li key={ind} className="px-4 py-2 bg-rose-200 rounded m-1">
              {items.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Show;
