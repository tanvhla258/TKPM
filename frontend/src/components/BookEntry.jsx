import * as React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
function BookEntry({ date, book, id, cost, handleOpenUpdate }) {
  return (
    <div>
      <Card sx={{ minWidth: 350 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {date}
          </Typography>
          <Typography fontWeight={600} variant="h5" component="div">
            {book.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {book.author}
          </Typography>
          <Typography variant="body2">Don gia: {cost} </Typography>
        </CardContent>

        <CardActions>
          {/* <Button size="small">Learn More</Button> */}
          <Button
            onClick={() => handleOpenUpdate()}
            variant="outlined"
            color="success"
            startIcon={<EditIcon />}
          >
            Chỉnh sửa
          </Button>
          <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
            Xóa
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default BookEntry;
