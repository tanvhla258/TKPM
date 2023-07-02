import React from "react";
import "./DashboardPage.css";
import LineChart from "../../components/Chart/LineChart";
import { blue, green, purple, red, yellow } from "@mui/material/colors";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import {
  Card,
  Typography,
  CardContent,
  Grid,
  Chip,
  Divider,
} from "@mui/material";
import CircleChart from "../../components/Chart/CircleChart";
import TodayCard from "../../components/TodayCard";
import TodayIcon from "@mui/icons-material/Today";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import TopBook from "../../components/TopBook";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { invoiceActions } from "../../reducers/invoiceReducer";
import { useEffect } from "react";
import TodayCard2 from "../../components/TodayCard2";
import { receiptActions } from "../../reducers/receiptReducer";
import { userActions } from "../../reducers/userReducer";

const DashboardCard = ({ invoices }) => {
  return (
    <Card sx={{ minWidth: 225 }}>
      <CardContent>
        <Typography>Hóa đơn thanh toán trong năm</Typography>
        <LineChart invoices={invoices} />
      </CardContent>
    </Card>
  );
};

function DashboardPage() {
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.invoice.invoices);
  const receipts = useSelector((state) => state.receipt.receipts);
  const users = useSelector((state) => state.user.users);
  console.log(invoices);
  useEffect(() => {
    dispatch(invoiceActions.fetchAllInvoice());
    dispatch(receiptActions.fetchAllReceipt());
    dispatch(userActions.fetchAllUser());
  }, [dispatch]);
  const totalCosts = invoices?.content?.map((invoice) => {
    const { bookInvoices } = invoice;
    const invoiceTotalCost = bookInvoices.reduce((total, bookInvoice) => {
      const { quantity, unitPrice } = bookInvoice;
      return total + quantity * unitPrice;
    }, 0);
    return invoiceTotalCost;
  });
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
              <TodayCard invoices={invoices} color={green} />
              {/* <TodayCard color={yellow} />
              <TodayCard color={red} />
              <TodayCard color={purple} /> */}
              <TodayCard2 receipts={receipts} color={red} />
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
              <TopBook invoices={invoices} />
            </div>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" lg={2}>
          <Divider orientation="vertical" flexItem />
        </Grid>
        <Grid container alignItems="flex-start" xs={12} lg={4} item>
          <Chip
            icon={<WysiwygIcon />}
            label="Kì vọng"
            size="large"
            color="primary"
          />
          <Grid sx={{ marginBottom: "55px" }} container item>
            <Grid xs={6} item>
              <CircleChart
                target={500000}
                current={totalCosts?.reduce((acc, item) => acc + item, 0)}
                type="Doanh thu"
              />
            </Grid>
            <Grid xs={6} item>
              <CircleChart
                target={20}
                current={users?.length}
                type="Người dùng"
              />
            </Grid>
          </Grid>
          <Chip
            icon={<BarChartIcon />}
            label="Biểu đồ"
            size="large"
            color="primary"
            sx={{ marginBottom: "10px" }}
          />
          <Grid container item>
            <DashboardCard invoices={invoices} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default DashboardPage;
