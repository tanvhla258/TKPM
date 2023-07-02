import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Box, Icon } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PaidIcon from "@mui/icons-material/Paid";
import { blue, green, red, yellow } from "@mui/material/colors";

function TodayCard({ invoices, color }) {
  const today = new Date().toISOString().slice(0, 10);
  // Filter invoices with the same day as today
  const filteredInvoices = invoices?.content?.filter(
    (invoice) => invoice.creationDate === today
  );
  const totalCosts = filteredInvoices?.map((invoice) => {
    const { bookInvoices } = invoice;
    const invoiceTotalCost = bookInvoices.reduce((total, bookInvoice) => {
      const { quantity, unitPrice } = bookInvoice;
      return total + quantity * unitPrice;
    }, 0);
    return invoiceTotalCost;
  });
  return (
    <Card
      sx={{
        // backgroundImage: radial-gradient( circle farthest-corner at 10% 20%,  rgba(176,229,208,1) 42%, rgba(92,202,238,0.41) 93.6% )
        backgroundColor: color?.[100],
        padding: "10px",
        width: " 150px",
        height: "125px",
      }}
    >
      <PaidIcon sx={{ color: color?.[400] }} />
      <Typography fontWeight={700} variant="h6">
        {totalCosts?.reduce((acc, item) => acc + item, 0)} VND
      </Typography>
      <Typography fontWeight={300}>Tổng hóa đơn</Typography>
      <Typography fontWeight={600} fontSize={10} sx={{ color: red[800] }}>
        {totalCosts != 0 ? "-30% so với hôm qua" : "chưa có thông tin"}
      </Typography>
    </Card>
  );
}

export default TodayCard;
