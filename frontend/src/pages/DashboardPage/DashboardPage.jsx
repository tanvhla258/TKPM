import React from "react";
import "./DashboardPage.css";
import PercentCircle from "../../components/PercentCircle";
import { Card, Typography, CardContent, Grid } from "@mui/material";
const DashboardCard = () => (
  <Card sx={{ minWidth: 225 }}>
    <CardContent>
      <Typography>Hóa đơn thanh toán trong tuần</Typography>
      <PercentCircle />
    </CardContent>
  </Card>
);

function DashboardPage() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item>
          <DashboardCard />
        </Grid>
        <Grid item>
          <DashboardCard />
        </Grid>
        <Grid item>
          <DashboardCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default DashboardPage;
