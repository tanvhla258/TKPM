import React from "react";
import "./DashboardPage.css";
import LineChart from "../../components/Chart/LineChart";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Card, Typography, CardContent, Grid, Chip } from "@mui/material";
import CircleChart from "../../components/Chart/CircleChart";
import TodayCard from "../../components/TodayCard";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TodayIcon from "@mui/icons-material/Today";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import TopBook from "../../components/TopBook";
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
      <Grid
        sx={{ background: "#fff", padding: "20px", borderRadius: "10px" }}
        spacing={2}
        container
      >
        <Grid xs={12} lg={6} item>
          <Grid mb={10} item>
            <Chip
              icon={<TodayIcon />}
              label="Thống kê theo ngày"
              size="large"
              color="primary"
              sx={{ marginBottom: "16px" }}
            />
            <div
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              <TodayCard />
              <TodayCard />
              <TodayCard />
              <TodayCard />
            </div>
          </Grid>
          <Grid item>
            <Chip
              icon={<AutoAwesomeIcon />}
              label="Top sách bán chạy"
              size="large"
              color="primary"
              mb={3}
              sx={{ marginBottom: "16px" }}
            />

            <div
              style={{
                width: "100%",
                display: "flex",
                gap: "20px",
              }}
            >
              <TopBook />
            </div>
          </Grid>
        </Grid>
        <Grid lg={2}></Grid>
        <Grid container alignItems="flex-start" xs={12} lg={4} item>
          <Chip
            icon={<WysiwygIcon />}
            label="Tổng quan"
            size="large"
            color="primary"
          />
          <Grid container item>
            <Grid xs={6} item>
              <CircleChart />
            </Grid>
            <Grid xs={6} item>
              <CircleChart />
            </Grid>
            <Grid xs={6} item>
              <CircleChart />
            </Grid>
            <Grid xs={6} item>
              <CircleChart />
            </Grid>
          </Grid>
          <Grid item>
            <DashboardCard />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default DashboardPage;
