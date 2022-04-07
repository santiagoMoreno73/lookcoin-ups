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
import TableCoins from "./Shared/TableCoins";

const Home = () => {
  const {
    state: { user },
  } = useContext(AuthContext);

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    ListCoins()
      .then(({ data }) => {
        setCoins(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
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
        <button className="button-coins">Coins</button>
        <button className="button-last_statics">Last statistics</button>
      </div>
      <div className="d-flex align-items-center my-2">
        <MdGpsFixed style={{ color: "#00e08e", fontSize: "30px" }} />
        <h5>Top Currencys</h5>
      </div>
      <Divider variant="fullWidth" />
      <div className="card-market">
        <h5 className="mb-2">State of the market</h5>
        <p>
          Total crypto market cap is $1.94, wich is up +2.96% over the last day.
        </p>
      </div>

      <TableCoins coins={coins} />
    </div>
  );
};

export default Home;
