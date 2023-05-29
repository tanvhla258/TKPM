import React from "react";
import "./DashboardPage.css";
import LineChart from "../../components/Chart/LineChart";
// import { DataGridPro } from "@mui/x-data-grid-pro";
// import { useDemoData } from "@mui/x-data-grid-generator";

// const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];
import { Card, Typography, CardContent, Grid } from "@mui/material";
import CircleChart from "../../components/Chart/CircleChart";
import TodayCard from "../../components/TodayCard";
// export function BasicExampleDataGridPro() {
//   const { data } = useDemoData({
//     dataSet: "Employee",
//     visibleFields: VISIBLE_FIELDS,
//     rowLength: 100,
//   });
// }
const DashboardCard = () => (
  <Card sx={{ minWidth: 225 }}>
    <CardContent>
      <Typography>Hóa đơn thanh toán trong tuần</Typography>
      <LineChart />
    </CardContent>
  </Card>
);

function DashboardPage() {
  return (
    <div>
      <Grid sx={{ background: "#fff" }} container spacing={2}>
        <Grid item>
          <TodayCard />
          <TodayCard />
          <TodayCard />
          <TodayCard />
        </Grid>
        <Grid item>
          <DashboardCard />
        </Grid>
        {/* <Grid item>
          <div style={{ height: 400, width: "100%" }}>
            <DataGridPro {...data} />
          </div>
        </Grid> */}
        <Grid item>
          <DashboardCard />
        </Grid>
        <Grid item>
          <CircleChart />
        </Grid>
      </Grid>
    </div>
  );
}

export default DashboardPage;
