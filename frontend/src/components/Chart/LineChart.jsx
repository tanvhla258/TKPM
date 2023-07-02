import React, { useEffect, useState } from "react";
import {} from "apexcharts";
import Chart from "react-apexcharts";

const LineChart = ({ invoices }) => {
  const [chartWidth, setChartWidth] = useState("340px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1180 && window.innerWidth > 766) {
        setChartWidth("650px");
      } else if (window.innerWidth <= 766) {
        setChartWidth("400px");
      } else {
        setChartWidth("410px");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const months = Array.from({ length: 12 }, (_, i) => i); // Array of month numbers from 0 to 11
  const data = months.map((month) => {
    const invoicesInMonth = invoices?.content?.filter((invoice) => {
      const invoiceMonth = new Date(invoice.creationDate).getMonth();
      return invoiceMonth === month;
    });
    return invoicesInMonth?.length || 0;
  });

  const monthNames = months.map((month) => {
    const monthName = new Intl.DateTimeFormat("en-US", {
      month: "short",
    }).format(new Date(0, month));
    return monthName;
  });
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: monthNames,
    },
  };

  const series = [
    {
      name: "Hóa đơn",
      data: data,
    },
  ];

  return (
    <Chart options={options} series={series} type="line" width={chartWidth} />
  );
};

export default LineChart;
