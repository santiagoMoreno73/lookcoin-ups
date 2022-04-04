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
      <>
        <h2>Welcome {user.email}</h2>
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
      </>
    </div>
  );
};

export default Home;
