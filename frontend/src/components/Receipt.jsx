import * as React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const onRemove = (receipt) => {
  try {
    axios
      .post(`http://localhost:8080/receipts/remove/${receipt.id}`)
      .then((respone) => {
        console.log(respone.data);
        Swal.fire("Xoá thành công", "OK").then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/receipts";
          }
        });
      });
  } catch (e) {
    console.log(e);
  }
};
function Receipt({ receipt, handleOpenUpdate }) {
  return (
    <div>
      <Card sx={{ minWidth: 350 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {receipt.creationDate}
          </Typography>
          <Typography
            fontWeight={600}
            sx={{ mb: 1.5 }}
            variant="h5"
            component="div"
          >
            {receipt.customer.fullName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
          <Typography variant="body2">
            Tiền thanh toán: {receipt.totalCost}
          </Typography>
        </CardContent>

        <CardActions>
          {/* <Button size="small">Learn More</Button> */}
          <Button
            onClick={() => handleOpenUpdate(receipt)}
            variant="outlined"
            color="success"
            startIcon={<EditIcon />}
          >
            Chỉnh sửa
          </Button>
          <Button
            onClick={() => onRemove(receipt)}
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
          >
            Xóa
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Receipt;
