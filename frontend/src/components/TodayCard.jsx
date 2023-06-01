import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Box, Icon } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PaidIcon from "@mui/icons-material/Paid";
import { blue, green, red, yellow } from "@mui/material/colors";

function TodayCard() {
  return (
    <Card
      sx={{
        // backgroundImage: radial-gradient( circle farthest-corner at 10% 20%,  rgba(176,229,208,1) 42%, rgba(92,202,238,0.41) 93.6% )
        backgroundColor: green[100],
        padding: "10px",
        width: " 150px",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        height: "125px",
>>>>>>> parent of 4381f84 (Delete frontend directory)
=======
        height: "125px",
>>>>>>> parent of 4381f84 (Delete frontend directory)
=======
        height: "125px",
>>>>>>> parent of 4381f84 (Delete frontend directory)
      }}
    >
      <PaidIcon sx={{ color: green[400] }} />
      <Typography fontWeight={700} variant="h6">
        120000 VND
      </Typography>
      <Typography fontWeight={300}>Bán sách</Typography>
      <Typography fontWeight={600} fontSize={10} sx={{ color: blue[800] }}>
        +8% so với hôm qua
      </Typography>
    </Card>
  );
}

export default TodayCard;
