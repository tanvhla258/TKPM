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
function User({ key, name, address, email, phone }) {
  return (
    <Card sx={{ minWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {name[0].toUpperCase()}
          </Avatar>
        }
        title={name}
        subheader=" Khach hang thuong"
      />
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        ></Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Email: {email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Phone: {phone}
        </Typography>
        <Typography color="text.secondary">Address: {address}</Typography>
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
