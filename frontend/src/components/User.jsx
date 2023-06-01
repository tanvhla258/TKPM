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
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
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
        <Typography fontWeight={600} variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          phamtan@gmail.com
        </Typography>
        {/* <Typography variant="body2">Don gia: {cost} </Typography> */}
      </CardContent>
    </Card>
  );
}

export default User;
