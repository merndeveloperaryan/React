import React from "react";

const Card = ({ songs, index, handleFavButton }) => {
  const { song, artist, album, added } = songs;
  return (
    <div className="w-72 bg-zinc-100 flex gap-3 relative py-5 rounded-lg px-2">
      <div className="w-16 h-16 rounded-lg bg-red-200 overflow-hidden">
        <img className="w-full h-full object-cover" src={album} alt="" />
      </div>
      <div>
        <h1>{song}</h1>
        <h2 className="text-xs text-zinc-400">{artist}</h2>
      </div>
      <button
        onClick={() => handleFavButton(index)}
        className={`text-xs text-white absolute bottom-0 translate-y-[50%] left-1/2 -translate-x-[50%] ${added ? "bg-green-500" : " bg-orange-500"} px-4 py-2 rounded-full whitespace-nowrap`}
      >
        {added ? "Added" : "Add to favourite"}
      </button>
    </div>
  );
};

export default Card;
