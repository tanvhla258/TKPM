import React from "react";
import {} from "apexcharts";
import { Chart } from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
const state = {
  options: {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {},
    },
    labels: [""],
  },
  series: [70],
};

function CircleChart() {
  return (
    <ReactApexChart
      type="radialBar"
      width="370"
      options={state.options}
      series={state.series}
    ></ReactApexChart>
  );
}
export default CircleChart;
