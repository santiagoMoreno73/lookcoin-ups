import React from "react";

//ui
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const TableCoins = ({ coins }) => {
  return (
    <>
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
  );
};

export default TableCoins;
