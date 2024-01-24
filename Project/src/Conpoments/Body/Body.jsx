import { Data } from "../Data/Data";

const Body = () => {
  const Div = Data.map((obj) => (
    <div key={obj.id}>
      {" "}
      <p>Name : {obj.movie}</p>
      <img src={obj.image}></img>
      <a href={obj.imdb_url}>Linke for</a>
      <p>Rating : {obj.rating}</p>
    </div>
  ));
  return <>{Div}</>;
};

export default Body;
