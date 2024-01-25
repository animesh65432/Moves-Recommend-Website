import React, { useState } from "react";
import "../Header/Header.css";
const Header = () => {
  const [Login, SetLogin] = useState("Log-in");

  return (
    <>
      <div className="header">
        <div>
          <h1>Home</h1>
        </div>
        <button
          className="but"
          onClick={() => {
            if (Login === "Log-in") {
              SetLogin("Log-out");
            } else {
              SetLogin("Log-in");
            }
          }}
        >
          {Login}
        </button>
      </div>
    </>
  );
};

export default Header;
