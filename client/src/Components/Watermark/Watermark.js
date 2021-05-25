import React from "react";

import "./Watermark.css";

function Watermark() {
  return (
    <div className="watermark">
      <img
        className="logoImage"
        src="https://searchingyard.com/assets/img/favicon.png"
        alt="SearchingYard Logo"
      />
      <span className="logoText">SearchingYard</span>
    </div>
  );
}

export default Watermark;
