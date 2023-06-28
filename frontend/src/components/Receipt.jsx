import * as React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import PaidIcon from "@mui/icons-material/Paid";
function Receipt({ date, book, id, cost, user, payup }) {
  return (
    <div>
      <Card sx={{ minWidth: 350 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {date}
          </Typography>
          <Typography
            fontWeight={600}
            sx={{ mb: 1.5 }}
            variant="h5"
            component="div"
          >
            {book.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Khách nợ: {user.name}
          </Typography>
          <Typography variant="body2">Giá trị nợ: {cost} </Typography>
        </CardContent>

        <CardActions>
          {/* <Button size="small">Learn More</Button> */}
          <Button
            onClick={() => payup()}
            variant="outlined"
            color="success"
            startIcon={<PaidIcon />}
          >
            Thanh toán nợ
          </Button>
          <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
            Xoa
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Receipt;
