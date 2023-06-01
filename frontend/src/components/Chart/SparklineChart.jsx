import React from "react";
const options = {
  series: [
    {
      data: randomizeArray(sparklineData),
    },
  ],
  chart: {
    type: "area",
    height: 160,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    curve: "straight",
  },
  fill: {
    opacity: 0.3,
  },
  yaxis: {
    min: 0,
  },
  colors: ["#DCE6EC"],
  title: {
    text: "$424,652",
    offsetX: 0,
    style: {
      fontSize: "24px",
    },
  },
  subtitle: {
    text: "Sales",
    offsetX: 0,
    style: {
      fontSize: "14px",
    },
  },
};
function SparklineChart() {
  return <div>SparklineChart</div>;
}

export default SparklineChart;
