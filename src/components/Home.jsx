import React, { useState, useContext, useEffect } from "react";

// context
import { AuthContext } from "../context/auth.provider";

// services
import { ListCoins } from "../services/Coins";

// ui
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@mui/material/TextField";

const Home = () => {
  const {
    state: { user },
  } = useContext(AuthContext);

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    ListCoins().then(({ data }) => {
      console.log(data);
      setCoins(data);
    });
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <h5>Welcome {user.email}</h5>
      <TextField
        id="search"
        className="mb-3"
        variant="standard"
        placeholder="search"
      />
      <div className="d-flex justify-content-between">
        <button className="button-sign">Coins</button>
        <button className="button-sign">Last statistics</button>
      </div>
      <div>
        <h3>Top Currencys</h3>
        <h4>State of the market</h4>
        <p>
          Total crypto market cap is $1.94, wich is up +2.96% over the last day.
        </p>
      </div>
      <TableContainer>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="left">Coin</TableCell>
              <TableCell align="left">MCAP</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coins.map((coin, index) => (
              <TableRow key={index}>
                <TableCell align="right">{index}</TableCell>
                <TableCell component="th" scope="row">
                  {coin.name}
                </TableCell>
                <TableCell align="right">
                  <div className="d-flex">
                    <img
                      style={{
                        width: 28,
                        height: 28,
                        margin: "0em 2em 0em 0em",
                      }}
                      src={coin.image}
                      alt="Coin_image"
                    />
                    <p>{coin.name}</p>
                  </div>
                </TableCell>
                <TableCell align="right">{coin.current_price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
