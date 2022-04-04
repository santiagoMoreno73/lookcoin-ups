import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_COINGECKO,
});

export const ListCoins = () => {
  return axiosInstance.get(
    `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  );
};
