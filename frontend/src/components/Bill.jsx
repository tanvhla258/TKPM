import * as React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import PaidIcon from "@mui/icons-material/Paid";
// import CardHeader from "@mui/material/CardHeader";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
function Bill({ date, user, id, cost }) {
  return (
    <Card sx={{ minWidth: 350 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {date}
        </Typography>
        <Typography fontWeight={600} variant="h5" component="div">
          {user.name}
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {author}
        </Typography> */}
        <Typography variant="body2">Gia tri no: {cost}</Typography>
      </CardContent>

      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
        <Button variant="outlined" color="success" startIcon={<PaidIcon />}>
          Thanh toan
        </Button>
        <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
          Ghi no
        </Button>
      </CardActions>
    </Card>
  );
}

export default Bill;
