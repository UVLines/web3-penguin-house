import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles/mintingStyle.css";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

import Footer from "./components/Footer";

function Minting({ totalSupply, totalNfts, buyFlys }) {
  const title = "Penguin on drugs";
  const mintPrice = 0.05;
  const artist = "Alcoholic Zebra";
  const library = "p5js";
  const license = "CC BY-NC 4.0";

  const totalAvailable = totalNfts;
  const collectionDescription =
    "Consequatur asperiores qui quia est dicta quos nihil nisi. Aliquamut ut ut reprehenderit. Consequatur a ut. Rerum in expedita iste eamagnam commodi.deleniti laboriosam qui id.";

  const instagramLink = " ";
  const twitterLink = " ";
  const discordLink = " ";

  const [mintAmount, setMintAmount] = useState(1);

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
    console.log(mintAmount); // logs mint amount
  };

  const incrementMintAmount = () => {
    const maxMintAmount = 20; //  max mint per transaction/mint amount

    let newMintAmount = mintAmount + 1;
    if (newMintAmount > maxMintAmount) {
      newMintAmount = maxMintAmount;
    }
    setMintAmount(newMintAmount);
    console.log(mintAmount); // logs mint amount
  };

  return (
    <div className="mintingBackground">
      <div className="mintingMainContainer">
        <div className="mintingImageHolder" />
        <div className="mintingRightDiv">
          <h2 className="mintingTitle">{title}</h2>
          <p className="mintingDescription">
            Corporis dolorum est facilis maxime perspiciatis amet. Perspiciatis
            aliquid eos aut deleniti laboriosam qui id. Quaerat in sint. Ut
            inventore qui ea autem cupiditate aut assumenda.
          </p>
          <p className="mintingPrice">
            Price: <span style={{ fontWeight: "bold" }}>{mintPrice} Ξ</span>
          </p>
          <div className="mintingButtonDiv">
            <div className="mintingButtonDiv2">
              <button
                onClick={() => buyFlys(mintAmount)}
                className="mintingButtonStyleBlue"
              >
                Minting
              </button>
              <div className="amountDiv">
                <button
                  className="plusController"
                  onClick={incrementMintAmount}
                >
                  +
                </button>
                <button className="displayAmount">{mintAmount}</button>
                <button
                  className="minusController"
                  onClick={decrementMintAmount}
                >
                  -
                </button>
              </div>
            </div>

            <Link to="/gallery">
              <button className="mintingButtonStyleBlack">
                View the gallery
              </button>
            </Link>
          </div>
          <div className="displayedEdition">
            {totalSupply}/{totalAvailable}
          </div>
        </div>
      </div>
      <div className="descriptionContariner">
        <div className="collectionInfo">
          <p className="collectionP">
            <span className="pBoldSpan">Artist:</span>
            {artist}
          </p>
          <p className="collectionP">
            <span className="pBoldSpan">Library:</span>
            {library}
          </p>
          <p className="collectionP">
            <span className="pBoldSpan">License:</span>
            {license}
          </p>
        </div>

        <div className="collectionDescription">
          <h4 style={{ paddingBottom: "4%" }}>About this collection:</h4>
          <p>{collectionDescription}</p>
        </div>

        <div className="collectionSocials">
          <a
            href={"https://twitter.com/" + twitterLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="socialStyle">
              <AiOutlineTwitter />
              <span style={{ marginLeft: "10px" }}>Twitter</span>
            </p>
          </a>

          <a
            href={"https://discordapp.com/invite/" + discordLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="socialStyle">
              <BsDiscord className="iconStyle" />
              <span style={{ marginLeft: "10px" }}>Discord</span>
            </p>
          </a>
          <a
            href={"https://instagram.com/" + instagramLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="socialStyle">
              <AiOutlineInstagram />
              <span style={{ marginLeft: "10px" }}>Instagram</span>
            </p>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Minting;
