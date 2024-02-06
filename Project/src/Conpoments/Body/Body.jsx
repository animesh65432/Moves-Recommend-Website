import React, { useEffect, useState } from "react";

import { Images, url } from "../Data/Data";
import Card from "./Moviescard/Card";
import "../Body/Body.css";
import axios from "axios";
import Shimmer from "./Shimmer/Shimmer";
import Working from "../Working";
const Body = () => {
  const [MoviesName, SetMoviesName] = useState([]);
  const [FilterArray, SetFilterArray] = useState([]);
  const [UserInput, SetUserInput] = useState("");

  const FilterArrayMethod = () => {
    const FilterArray = MoviesName.filter((obj) =>
      obj.movie.toLowerCase().includes(UserInput.toLocaleLowerCase())
    );

    SetFilterArray(FilterArray);
  };

  useEffect(() => {
    fecthdata();
  }, []);

  const fecthdata = async () => {
    let Data = await axios.get(url);

    let DataArray = Data.data;
    console.log(DataArray);

    const MoviesArray = DataArray.map((obj, index) => {
      return { ...obj, image: Images[index].image };
    });

    SetFilterArray(MoviesArray);
    SetMoviesName(MoviesArray);
  };

  if (MoviesName.length === 0) {
    return <Shimmer />;
  }

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

        {FilterArray.length === 0 && <Working />}
      </div>
    </>
  );
};

export default Body;
