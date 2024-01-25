import { Data } from "../Data/Data";
import Card from "./Moviescard/Card";
import "../Body/Body.css";

const Body = () => {
  return (
    <div className="div">
      {Data.map((obj) => (
        <Card
          key={obj.id}
          image={obj.image}
          Name={obj.movie}
          link={obj.imdb_url}
          rating={obj.rating}
        />
      ))}
    </div>
  );
};

export default Body;
