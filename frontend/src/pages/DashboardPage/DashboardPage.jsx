import React from "react";
import "./DashboardPage.css";
import LineChart from "../../components/Chart/LineChart";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 2a522ee (dashboard)
=======
>>>>>>> 5128ced5cbf3d37ce2d15d69c12338f84b612e4e
// import { DataGridPro } from "@mui/x-data-grid-pro";
// import { useDemoData } from "@mui/x-data-grid-generator";

// const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];
import { Card, Typography, CardContent, Grid } from "@mui/material";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5128ced5cbf3d37ce2d15d69c12338f84b612e4e
import CircleChart from "../../components/Chart/CircleChart";
import TodayCard from "../../components/TodayCard";
// export function BasicExampleDataGridPro() {
//   const { data } = useDemoData({
//     dataSet: "Employee",
//     visibleFields: VISIBLE_FIELDS,
//     rowLength: 100,
//   });
// }
<<<<<<< HEAD
=======
=======
>>>>>>> parent of 4381f84 (Delete frontend directory)
=======
>>>>>>> parent of 4381f84 (Delete frontend directory)
=======
>>>>>>> parent of 4381f84 (Delete frontend directory)
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Card, Typography, CardContent, Grid, Chip } from "@mui/material";
import CircleChart from "../../components/Chart/CircleChart";
import TodayCard from "../../components/TodayCard";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TodayIcon from "@mui/icons-material/Today";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import TopBook from "../../components/TopBook";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 4381f84 (Delete frontend directory)
=======
>>>>>>> parent of 4381f84 (Delete frontend directory)
=======
>>>>>>> parent of 4381f84 (Delete frontend directory)
=======
>>>>>>> parent of 4381f84 (Delete frontend directory)
=======
import CircleChart from "../../components/Chart/CircleChart";
import TodayCard from "../../components/TodayCard";
// export function BasicExampleDataGridPro() {
//   const { data } = useDemoData({
//     dataSet: "Employee",
//     visibleFields: VISIBLE_FIELDS,
//     rowLength: 100,
//   });
// }
>>>>>>> parent of 2a522ee (dashboard)
=======
>>>>>>> 5128ced5cbf3d37ce2d15d69c12338f84b612e4e
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 2a522ee (dashboard)
=======
>>>>>>> 5128ced5cbf3d37ce2d15d69c12338f84b612e4e
      <Grid sx={{ background: "#fff" }} container spacing={2}>
        <Grid item>
          <TodayCard />
          <TodayCard />
          <TodayCard />
          <TodayCard />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5128ced5cbf3d37ce2d15d69c12338f84b612e4e
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
<<<<<<< HEAD
=======
=======
>>>>>>> parent of 4381f84 (Delete frontend directory)
=======
>>>>>>> parent of 4381f84 (Delete frontend directory)
=======
>>>>>>> parent of 4381f84 (Delete frontend directory)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 4381f84 (Delete frontend directory)
=======
>>>>>>> parent of 4381f84 (Delete frontend directory)
=======
>>>>>>> parent of 4381f84 (Delete frontend directory)
=======
>>>>>>> parent of 4381f84 (Delete frontend directory)
=======
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
>>>>>>> parent of 2a522ee (dashboard)
=======
>>>>>>> 5128ced5cbf3d37ce2d15d69c12338f84b612e4e
        </Grid>
      </Grid>
    </div>
  );
}

export default DashboardPage;
