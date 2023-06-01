import React from "react";
import {} from "apexcharts";
import { Chart } from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
const state = {
  options: {
    chart: {
      height: 200,
      width: 200,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {},
    },
    labels: ["Phiếu nợ"],
  },
  series: [70],
};

function CircleChart() {
  return (
    <ReactApexChart
      type="radialBar"
      options={state.options}
      series={state.series}
      width={230}
    ></ReactApexChart>
  );
}
export default CircleChart;
