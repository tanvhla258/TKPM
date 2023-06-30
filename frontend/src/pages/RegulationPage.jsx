import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import WidgetsIcon from "@mui/icons-material/Widgets";
import Switch from "@mui/material/Switch";
import AddIcon from "../components/AddIcon";
import { useSelector, useDispatch } from "react-redux";
import { regulationActions } from "../reducers/regulationReducer";
import { Grid } from "@mui/material";
import { useEffect } from "react";

const label = { inputProps: { "aria-label": "Switch demo" } };
const SettingCard = ({ regulation }) => {
 
  return (
    <Card sx={{ background: "#fff", minWidth: 400, position: "relative" }}>
      {/* {switchValue && (
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: "rgba(255,255,255,0.8)",
          }}
        ></div>
      )} */}
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color={"text.secondary"} gutterBottom>
          Quy dinh {regulation.id}
        </Typography>
        <Typography variant="h5" component="div">
          {regulation.title}
        </Typography>
        <Typography fontWeight={600} sx={{ mt: 1.5, mb: 1.5 }}>
          {regulation.value}
        </Typography>
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
        {/* <CardActions sx={{ right: 2, position: "absolute" }}>
          <Switch
            onChange={() => {
              handleToggle(id);
            }}
            {...label}
            defaultChecked
          />
        </CardActions> */}
      </CardActions>
    </Card>
  );
};
function RegulationPage() {
  // const handleToggle = (switchId) => {
  //   dispatch(toggleSwitch({ switchId }));
  // };
  // const switches = useSelector((state) => state.regulation.switches);
  // console.log(switches);
  const dispatch = useDispatch();
  const regulations = useSelector((state) => state.regulation.regulations);

  useEffect(() => {
    dispatch(regulationActions.fetchAllRegulations());
  }, [dispatch]);

  console.log(regulations);
 
  return (
    <Grid container spacing={2}>
     
   {regulations.result?.map(reg=>{
    return( <Grid item>
      <SettingCard
        // handleToggle={handleToggle}
        id="switch1"
        regulation={reg}
        // switchValue={switches.switch1}
      />
    </Grid>)
   })}
      {/* <Grid item>
        <SettingCard id="switch4" />
      </Grid> */}
      {/* <AddIcon handleOpen={handleOpen} /> */}
    </Grid>
  );
}

export default RegulationPage;
