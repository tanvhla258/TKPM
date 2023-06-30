import * as React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
// import CardHeader from "@mui/material/CardHeader";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
function Book({ book }) {
  return (
    <Card sx={{ minWidth: 350 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {book.category.name}
        </Typography>
        <Typography
          sx={{ textOverflow: "ellipsis" }}
          fontWeight={600}
          variant="h5"
          component="div"
        >
          {book.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {book.author}
        </Typography>
      </CardContent>

      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
        <Button color="success" startIcon={<EditIcon />}>
          Chỉnh sửa
        </Button>
        <Button color="error" startIcon={<DeleteIcon />}>
          Xóa
        </Button>
      </CardActions>
    </Card>
  );
}

export default Book;
