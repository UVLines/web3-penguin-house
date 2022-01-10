import React from "react";
import "../styles/modalStyle.css";

function Modal({ closeModal, osLink, latestTx }) {
  //   console.log(latestTx);
  //   console.log(osLink);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        {/* <button className="exitButton" onClick={() => closeModal(false)}>
          X
        </button> */}
        <div className="modalTitle">Mint successful ! </div>
        <p className="modalDescription">
          Congratulaions and welcome to the Penguin community <br />
          Thank you for supporting the project <br />
          Check your latest mint <br />
          and see what traits you got !!
        </p>
        <div className="modalBody">
          <a
            href={"https://ropsten.etherscan.io/tx/" + latestTx}
            target="_blank"
            rel="noreferrer"
          >
            <button className="modalButtonStyleBlue">View on etherscan</button>
          </a>
          {/* <br /> */}
          <a
            //   style={{ justifyContent: "center", alignSelf: "center" }}
            href={osLink}
            target="_blank"
            rel="noreferrer"
          >
            <button className="modalButtonStyleBlue">View on opensea</button>
          </a>
        </div>
        <div className="modalFooter">
          <button
            className="modalButtonStyleBlack"
            onClick={() => closeModal(false)}
          >
            Back to the website
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
