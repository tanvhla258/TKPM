import React from "react";
import {} from "apexcharts";
import Chart from "react-apexcharts";
const state = {
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70],
    },
  ],
};

function PercentCircle() {
  return (
    <Chart
      options={state.options}
      series={state.series}
      type="line"
      width="380"
    />
  );
}
export default PercentCircle;
