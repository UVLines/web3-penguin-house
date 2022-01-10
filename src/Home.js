import React from "react";
import "./styles/homeStyle.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homeWrapper">
      <div className="mainContainer">
        <div className="lefttDiv">
          <div className="imageHolder">
            <div className="imageBottomBar" />
          </div>
        </div>
        <div className="rightDiv">
          <div className="rightContainer">
            <h2 className="title">Penguin on drugs</h2>
            <p className="Description">
              Corporis dolorum est facilis maxime perspiciatis amet.
              Perspiciatis aliquid eos aut deleniti laboriosam qui id. Quaerat
              in sint. Ut inventore qui ea autem cupiditate aut assumenda.
            </p>
            <div className="buttonDiv">
              <Link to="/minting">
                <button className="buttonStyleBlue">Minting</button>
              </Link>
              <Link to="/gallery">
                <button className="buttonStyleBlack">Visit The Gallery</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
