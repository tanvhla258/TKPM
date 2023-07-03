import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Box, Icon } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PaidIcon from "@mui/icons-material/Paid";
import { blue, green, red, yellow } from "@mui/material/colors";

function TodayCard2({ receipts, color }) {
  const today = new Date().toISOString().slice(0, 10);
  const filteredreceipts = receipts?.content?.filter(
    (receipt) => receipt.creationDate === today
  );
  const totalCost = filteredreceipts?.reduce(
    (acc, item) => acc + item.totalCost,
    0
  );
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
        {totalCost} VND
      </Typography>
      <Typography fontWeight={300}>Tổng phiếu thu</Typography>
      <Typography fontWeight={600} fontSize={10} sx={{ color: blue[800] }}>
        {totalCost != 0 ? "+20% so với hôm qua" : "chưa có thông tin"}
      </Typography>
    </Card>
  );
}

export default TodayCard2;
