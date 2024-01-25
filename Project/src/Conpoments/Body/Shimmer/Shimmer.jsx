import { Dummy_Data } from "../../Data/Data";
import "./Shimmer.css";

const ShimmerCard = ({ id }) => (
  <>
    <div className="moviescard">
      <img />
      <div>
        <p></p>
      </div>
      <a></a>
      <div className="rating">
        <span className="stars-container"></span>
        <p></p>
        <span style={{ display: "none" }}>{id}</span>
      </div>
    </div>
  </>
);

const Shimmer = () => {
  return (
    <>
      <div className="search-container">
        <input placeholder="Please Search Movies Here"></input>
        <button>Search</button>
      </div>
      <div className="div">
        {Dummy_Data.map((obj) => (
          <ShimmerCard key={obj.id} id={obj.id} />
        ))}
      </div>
    </>
  );
};

export default Shimmer;
