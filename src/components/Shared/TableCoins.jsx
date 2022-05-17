import React, { useContext, useState } from "react";

//ui
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@mui/material/Checkbox";

// context
import { AuthContext } from "../../context/auth.provider";

// icons
import {
  MdMonetizationOn,
  MdOutlineScatterPlot,
  MdBarChart,
  MdFavoriteBorder,
  MdFavorite,
} from "react-icons/md";

const TableCoins = ({ coins }) => {
  const {
    state: { user, userCoins },
    dispatch,
  } = useContext(AuthContext);

  const addFavorites = (coin) => {
    dispatch({
      type: "FAVORITES",
      payload: coin,
    });
  };

  console.log(userCoins);

  return (
    <>
      <TableContainer>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">#</TableCell>
              <TableCell align="left">
                <MdMonetizationOn
                  style={{ color: "#ffa834", fontSize: "24px" }}
                />
                Coin
              </TableCell>
              <TableCell align="left">
                <MdOutlineScatterPlot
                  style={{ color: "#6334e3", fontSize: "24px" }}
                />
                MCAP
              </TableCell>
              <TableCell align="left">
                <MdBarChart style={{ color: "#e93578", fontSize: "24px" }} />
                Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coins.map((coin, index) => (
              <TableRow key={index}>
                <TableCell align="center">
                  {" "}
                  <Checkbox
                    onClick={() => addFavorites(coin)}
                    icon={<MdFavoriteBorder />}
                    checkedIcon={<MdFavorite />}
                  />
                </TableCell>
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
                      alt="coin_image"
                    />
                    <p>{coin.name}</p>
                  </div>
                </TableCell>
                <TableCell align="left">{coin.current_price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableCoins;
