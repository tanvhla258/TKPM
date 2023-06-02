import React, { useEffect, useState } from "react";
import {} from "apexcharts";
import Chart from "react-apexcharts";

const LineChart = () => {
  const [chartWidth, setChartWidth] = useState("340px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1180 && window.innerWidth > 766) {
        setChartWidth("700px");
      } else if (window.innerWidth <= 766) {
        setChartWidth("400px");
      } else {
        setChartWidth("380px");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  };

  const series = [
    {
      name: "Hóa đơn",
      data: [30, 40, 45, 50, 49, 60, 70],
    },
  ];

  return (
    <Chart options={options} series={series} type="line" width={chartWidth} />
  );
};

export default LineChart;
