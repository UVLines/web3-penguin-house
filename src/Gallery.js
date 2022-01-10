import React from "react";
import { Link } from "react-router-dom";
import "./styles/galleryStyle.css";

function Gallery() {
  return (
    <div className="galleryContainer">
      <h1>Coming soon</h1>
      <button className="blackButton">
        <Link to="/"> Back home</Link>
      </button>
    </div>
  );
}

export default Gallery;
