import React, { useState, useContext, useEffect } from "react";

// context
import { AuthContext } from "../context/auth.provider";

// services
import { ListCoins } from "../services/Coins";

// ui
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import "../styles/components/Home.css";

// icons
import { MdGpsFixed } from "react-icons/md";

// components
import TableCoins from "../components/Shared/TableCoins";
import LineGraphic from "../components/Shared/Graphics/LineGraphic";
import BarGraphic from "../components/Shared/Graphics/BarGraphic";
import GeneralMarket from "../components/Shared/Graphics/GeneralMarket";

const Home = () => {
  const {
    state: { user },
  } = useContext(AuthContext);

  const [coins, setCoins] = useState([]);
  const [option, setOptions] = useState(0);

  useEffect(() => {
    ListCoins()
      .then(({ data }) => {
        setCoins(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container h-100">
      <h3>Home</h3>
      <h5>Welcome {user.email}</h5>
      <div className="col-12 d-flex mb-5 justify-content-center mt-4">
        <TextField
          fullWidth
          id="search_coin"
          variant="outlined"
          label="Search"
        />
      </div>
      <div className="d-flex justify-content-between mb-4">
        <button
          className={option === 0 ? "button-coins" : "button-last_statics"}
          onClick={() => setOptions(0)}
        >
          Coins
        </button>
        <button
          className={option === 1 ? "button-coins" : "button-last_statics"}
          onClick={() => setOptions(1)}
        >
          Last statistics
        </button>
      </div>
      <div className="d-flex align-items-center my-2">
        <MdGpsFixed style={{ color: "#00e08e", fontSize: "30px" }} />
        <h5>{option === 0 ? "Top Currencys" : "Ultimate Statistics"}</h5>
      </div>
      <Divider variant="fullWidth" />

      {option === 0 ? (
        <>
          <div className="card-market">
            <h5 className="mb-2">State of the market</h5>
            <p>
              Total crypto market cap is <b>$1.94</b>, wich is up <b>+2.96% </b>
              over the last day.
            </p>
          </div>
          <TableCoins coins={coins} />
        </>
      ) : (
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex align-items-center">
            <GeneralMarket />
          </div>
          <p>General Balance</p>
          <div className="d-flex align-items-center">
            <BarGraphic />
          </div>
          <p>Market History </p>
          <div className="d-flex align-items-center mb-5">
            <LineGraphic />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
