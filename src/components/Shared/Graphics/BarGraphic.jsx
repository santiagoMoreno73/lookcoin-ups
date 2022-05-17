import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Market A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Market B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Market C",
    uv: 2000,
    pv: 9000,
    amt: 2290,
  },
  {
    name: "Market D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

const BarGraphic = () => {
  return (
    <BarChart width={300} height={280} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#1b7837" />
      <Bar dataKey="uv" fill="#5aae61" />
    </BarChart>
  );
};

export default BarGraphic;
