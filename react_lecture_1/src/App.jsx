import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const App = () => {
  const raw = [
    {
      song: "Loca Loca",
      artist: "Yo Yo Honey Singh",
      album: "https://images.unsplash.com/photo-1625435572266-c30e0adc63f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
      added: false,
    },
    {
      song: "Makhna",
      artist: "Yo Yo Honey Singh",
      album: "https://images.unsplash.com/photo-1496346236646-50e985b31ea4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbiUyMHJvY2slMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
      added: false,
    },
    {
      song: "Love Dose",
      artist: "Yo Yo Honey Singh",
      album: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbiUyMHJvY2slMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
      added: false,
    },
    {
      song: "Millionare",
      artist: "Yo Yo Honey Singh",
      album: "https://images.unsplash.com/photo-1503001358144-8d7f2c1db9f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVuJTIwcm9jayUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      added: false,
    },
  ];

  const [data, setData] = useState(raw);

  const handleFavButton = (prevIndex) => setData(data.map((item, index)=>{
    if(index === prevIndex){
      return {...item, added:!item.added}
    }
    return item;
  }))

  return (
    <div>
      <Navbar data={data} />
      <div className="p-10 flex gap-10 flex-wrap">
        {data.map((item, index) => {
          return <Card key={index} index={index} songs={item} handleFavButton={handleFavButton} />;
        })}
      </div>
    </div>
  );
};

export default App;
