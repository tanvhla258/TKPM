import React from "react";
import {} from "apexcharts";
import { Chart } from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

function CircleChart({ type, target, current }) {
  const state = {
    options: {
      chart: {
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {},
      },
      labels: [type],
    },
    series: [Math.floor((current / target) * 100)],
  };
  return (
    <ReactApexChart
      type="radialBar"
      options={state.options}
      series={state.series}
      width={250}
    ></ReactApexChart>
  );
}
export default CircleChart;
