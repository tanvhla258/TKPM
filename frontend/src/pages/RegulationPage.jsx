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
import { useSelector, useDispatch } from "react-redux";
import { toggleSwitch } from "../reducers/regulationReducer";
import { Grid } from "@mui/material";

const label = { inputProps: { "aria-label": "Switch demo" } };
const SettingCard = ({ id, switchValue, handleToggle }) => {
  const disableColor = switchValue ? "rgba(0,0,0,0.2)" : "transparent";
  console.log(id, "  ", disableColor);
  return (
    <Card
      sx={{ background: disableColor, minWidth: 400, position: "relative" }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color={"text.secondary"} gutterBottom>
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
          <Switch
            onChange={() => {
              handleToggle(id);
            }}
            {...label}
            defaultChecked
          />
        </CardActions>
      </CardActions>
    </Card>
  );
};
function RegulationPage() {
  const handleToggle = (switchId) => {
    dispatch(toggleSwitch({ switchId }));
  };
  const switches = useSelector((state) => state.regulation.switches);
  console.log(switches);
  const dispatch = useDispatch();

  return (
    <Grid container spacing={2}>
      <Grid item>
        <SettingCard
          handleToggle={handleToggle}
          id="switch1"
          switchValue={switches.switch1}
        />
      </Grid>
      <Grid item>
        <SettingCard
          handleToggle={handleToggle}
          id="switch2"
          switchValue={switches.switch2}
        />
      </Grid>
      <Grid item>
        <SettingCard
          handleToggle={handleToggle}
          id="switch3"
          switchValue={switches.switch3}
        />
      </Grid>
      {/* <Grid item>
        <SettingCard id="switch4" />
      </Grid> */}
      {/* <AddIcon handleOpen={handleOpen} /> */}
    </Grid>
  );
}

export default RegulationPage;
