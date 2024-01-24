import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Conpoments/Footer/Footer";
import Header from "./Conpoments/Header/Header";
import Body from "./Conpoments/Body/Body";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Body />
    <Footer />
  </React.StrictMode>
);
