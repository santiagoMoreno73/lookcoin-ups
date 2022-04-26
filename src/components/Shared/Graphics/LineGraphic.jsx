import React from "react";

import { LineChart, Line, XAxis, YAxis, ReferenceLine } from "recharts";

const LineGraphic = () => {
  const data = [];
  const launchDate = 2018;

  const rand = 300;
  for (let i = 0; i < 7; i++) {
    const year = 2018 + i;
    const value = Math.random() * (rand + 50) + 100;
    let d = {
      year: year,
      value: value,
      beforeLaunch: year <= launchDate ? value : undefined,
    };

    data.push(d);
  }

  const type = "monotone";

  return (
    <LineChart width={300} height={280} data={data}>
      <Line type={type} dataKey="value" stroke="#00e08e" dot={true} />
      <Line type={type} dataKey="beforeLaunch" stroke="red" dot={true} />
      <XAxis dataKey="year" />
      <YAxis />
      <ReferenceLine x={launchDate} />
    </LineChart>
  );
};

export default LineGraphic;
