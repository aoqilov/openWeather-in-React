import React from "react";
import Sun from "../assets/clearsky.png";

const Loading = () => {
  return (
    <div className="loading-container">
      <img src={Sun} alt="" />
      <div className="spinner">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
