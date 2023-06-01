import React from "react";
import {} from "apexcharts";
import { Chart } from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
const state = {
  options: {
    chart: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      height: 350,
=======
      height: 200,
      width: 200,
>>>>>>> parent of 4381f84 (Delete frontend directory)
=======
      height: 200,
      width: 200,
>>>>>>> parent of 4381f84 (Delete frontend directory)
=======
      height: 200,
      width: 200,
>>>>>>> parent of 4381f84 (Delete frontend directory)
=======
      height: 200,
      width: 200,
>>>>>>> parent of 4381f84 (Delete frontend directory)
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {},
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    labels: [""],
=======
    labels: ["Phiếu nợ"],
>>>>>>> parent of 4381f84 (Delete frontend directory)
=======
    labels: ["Phiếu nợ"],
>>>>>>> parent of 4381f84 (Delete frontend directory)
=======
    labels: ["Phiếu nợ"],
>>>>>>> parent of 4381f84 (Delete frontend directory)
=======
    labels: ["Phiếu nợ"],
>>>>>>> parent of 4381f84 (Delete frontend directory)
  },
  series: [70],
};

function CircleChart() {
  return (
    <ReactApexChart
      type="radialBar"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      width="370"
      options={state.options}
      series={state.series}
=======
      options={state.options}
      series={state.series}
      width={230}
>>>>>>> parent of 4381f84 (Delete frontend directory)
=======
      options={state.options}
      series={state.series}
      width={230}
>>>>>>> parent of 4381f84 (Delete frontend directory)
=======
      options={state.options}
      series={state.series}
      width={230}
>>>>>>> parent of 4381f84 (Delete frontend directory)
=======
      options={state.options}
      series={state.series}
      width={230}
>>>>>>> parent of 4381f84 (Delete frontend directory)
    ></ReactApexChart>
  );
}
export default CircleChart;
