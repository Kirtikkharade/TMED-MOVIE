import React from "react";
import "./index.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading Movies...</p>
    </div>
  );
};

export default Loader;