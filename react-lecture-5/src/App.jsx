import React from "react";
import Navbar from "./components/Navbar";
import Routing from "./utilities/Routing";

const App = () => {
  return (
    <div className="w-full h-screen bg-zinc-200">
      <Navbar />
      <Routing />
      
    </div>
  );
};

export default App;
