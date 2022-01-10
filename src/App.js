import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Web3 from "web3";

import useLocalStorage from "use-local-storage";

import MintingContract from "./MintingContract.json";
import NavBar from "./components/NavBar";
import Home from "./Home";
import Minting from "./Minting";
import Gallery from "./Gallery";
import Modal from "./components/Modal";
// import MadeWith from "./components/MadeWith";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  let ethWindow = window.ethereum;
  const CONTRACT_ADDRESS = "0x77C9e7733550026AcE28950e973681C0F74191E3";
  const [contract, setContract] = useState(undefined);
  const [ethAddress, setEthAddress] = useState("");
  const [totalSupply, setTotalSupply] = useState(0);
  const [latestTx, setlatestTx] = useState("");
  const [osLink, setOsLink] = useState("");
  const [totalNfts, setTotalNfts] = useState(0);

  const [openModal, setOpenModal] = useState(false);

  const connectWallet = async () => {
    let provider = window.ethereum;

    if (typeof provider !== "undefined") {
      // MetaMask is installed

      provider
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          setEthAddress(accounts[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const disconnectWallet = () => {
    setEthAddress("");
    alert("disconnected");
  };

  const loadBlockchain = async () => {
    let provider = window.ethereum;
    const web3 = new Web3(provider);

    const contract = new web3.eth.Contract(
      MintingContract.abi,
      CONTRACT_ADDRESS
    );
    setContract(contract);
  };

  useEffect(() => {
    getSupply();
    getTotal();
  });

  useEffect(() => {
    connectWallet();
    loadBlockchain();
  }, [ethWindow]);

  const buyFlys = (number) => {
    if (contract !== undefined && ethAddress !== "") {
      var value = number * 20000000;

      contract.methods
        .buyFlys(number)
        .send({ from: ethAddress, value: value })
        .then((tx) => {
          console.log(tx);
          setlatestTx(tx.transactionHash);
          setOsLink(
            "https://opensea.io/assets/" +
              tx.to +
              "/" +
              tx.events.Transfer.returnValues.tokenId
          );

          getSupply();
          setOpenModal(true);
        })

        .catch((err) => {
          console.log(err);
        });
    }
  };

  const getSupply = () => {
    if (contract !== undefined && ethAddress !== "") {
      contract.methods
        .currentSupply()
        .call()
        .then((supply) => {
          setTotalSupply(supply);
        })

        .catch((err) => {
          console.log(err);
        });
    }
  };

  const getTotal = () => {
    if (contract !== undefined && ethAddress !== "") {
      contract.methods
        .nftsPublicNumber()
        .call()
        .then((total) => {
          setTotalNfts(total);
        })

        .catch((err) => {
          console.log(err);
        });
    }
  };

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div data-theme={theme}>
      <Router>
        {openModal && (
          <Modal
            closeModal={setOpenModal}
            latestTx={latestTx}
            osLink={osLink}
          />
        )}
        <NavBar
          connectWallet={connectWallet}
          disconnectWallet={disconnectWallet}
          ethAddress={ethAddress}
          switchTheme={switchTheme}
          theme={theme}
          contractAddress={CONTRACT_ADDRESS}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/minting"
            element={
              <Minting
                totalSupply={totalSupply}
                totalNfts={totalNfts}
                buyFlys={buyFlys}
                latestTx={latestTx}
                osLink={osLink}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            }
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
      {/* <MadeWith /> */}
    </div>
  );
}

export default App;
