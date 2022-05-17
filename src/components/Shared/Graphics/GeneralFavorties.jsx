import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Bitcoin",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Solana",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Ethereum",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Tether",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "STEPN",
    A: 65,
    B: 85,
    fullMark: 150,
  },
  {
    subject: "Bullshit inu",
    A: 75,
    B: 85,
    fullMark: 150,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <RadarChart
        width={300}
        height={300}
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="Money"
          dataKey="A"
          stroke="#100a0a"
          fill="#00e08e"
          fillOpacity={0.6}
        />
      </RadarChart>
    );
  }
}
