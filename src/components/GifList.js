import React from "react";

const GifList = ({ gifs }) => {
  return (
    <ul>
      {gifs.map(gif => (
        <li key={gif.id}>
          <img src={gif.url} alt="gif" />
        </li>
      ))}
    </ul>
  );
};

export default GifList;
