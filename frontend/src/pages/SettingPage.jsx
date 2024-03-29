import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import WidgetsIcon from "@mui/icons-material/Widgets";
import Switch from "@mui/material/Switch";
import AddIcon from "../components/AddIcon";

import { Grid } from "@mui/material";
const label = { inputProps: { "aria-label": "Switch demo" } };
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const SettingCard = () => {
  return (
    <Card sx={{ minWidth: 400, position: "relative" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Quy dinh 1
        </Typography>
        <Typography variant="h5" component="div">
          Thay doi luong ton toi thieu
        </Typography>
        <Typography fontWeight={600} sx={{ mt: 1.5, mb: 1.5 }}>
          50
        </Typography>
      </CardContent>
      <CardActions>
        <Button startIcon={<WidgetsIcon />}>Update</Button>
        <Button color="error" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <CardActions sx={{ right: 2, position: "absolute" }}>
          <Switch {...label} defaultChecked />
        </CardActions>
      </CardActions>
    </Card>
  );
};
function SettingPage() {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <SettingCard />
      </Grid>
      <Grid item>
        <SettingCard />
      </Grid>
      <Grid item>
        <SettingCard />
      </Grid>
      <Grid item>
        <SettingCard />
      </Grid>
      {/* <AddIcon handleOpen={handleOpen} /> */}
    </Grid>
  );
}

export default SettingPage;
