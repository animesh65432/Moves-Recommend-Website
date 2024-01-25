import React, { useState } from "react";

import { Data } from "../Data/Data";
import Card from "./Moviescard/Card";
import "../Body/Body.css";

const Body = () => {
  const [MoviesName, SetMoviesName] = useState(Data);
  const [FilterArray, SetFilterArray] = useState(Data);
  const [UserInput, SetUserInput] = useState("");

  const FilterArrayMethod = () => {
    const FilterArray = MoviesName.filter((obj) =>
      obj.movie.toLowerCase().includes(UserInput.toLocaleLowerCase())
    );

    SetFilterArray(FilterArray);
  };

  return (
    <>
      <div className="search-container">
        <input
          onChange={(e) => SetUserInput(e.target.value)}
          placeholder="Please Serch Movies Here"
        ></input>
        <button onClick={FilterArrayMethod}>Serch</button>
      </div>
      <div className="div">
        {FilterArray.map((obj) => (
          <Card
            key={obj.id}
            image={obj.image}
            Name={obj.movie}
            link={obj.imdb_url}
            rating={obj.rating}
          />
        ))}
      </div>
    </>
  );
};

export default Body;
