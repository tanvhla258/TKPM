import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import WidgetsIcon from "@mui/icons-material/Widgets";
import DeleteIcon from "@mui/icons-material/Delete";

import { Button } from "@mui/material";
function User() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Pham Tan"
        subheader=" Khach hang thuong"
      />
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        ></Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Email: phamtan@gmail.com
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Phone: 0998751123
        </Typography>
        <Typography color="text.secondary">Address: Ho Chi Minh</Typography>
      </CardContent>
      <CardActions sx={{ marginLeft: 0 }}>
        <Button color="success" startIcon={<WidgetsIcon />}>
          Update
        </Button>
        <Button color="error" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default User;
