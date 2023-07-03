import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector, useDispatch } from "react-redux";
import { regulationActions } from "../reducers/regulationReducer";
import { useEffect } from "react";
import UpdateRegulationForm from "../components/Form/UpdateRegulationForm";
import { Button, Grid, Modal, Box, Typography, Icon } from "@mui/material";
import { boxstyle600 } from "../constants/boxstyle";
const label = { inputProps: { "aria-label": "Switch demo" } };
const SettingCard = ({ regulation, handleOpenUpdate }) => {
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
          Quy định {regulation.id + 1}
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
          onClick={() => handleOpenUpdate(regulation)}
          variant="outlined"
          color="success"
          startIcon={<EditIcon />}
        >
          Chỉnh sửa
        </Button>
        {/* <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
          Xóa
        </Button> */}
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
  const [updateRegulation, setUpdateRegulation] = React.useState(false);

  useEffect(() => {
    dispatch(regulationActions.fetchAllRegulations());
  }, [dispatch]);

  console.log(regulations);
  const [openUpdate, setOpenUpdate] = React.useState(false);

  const handleOpenUpdate = (data) => {
    setUpdateRegulation(data);
    setOpenUpdate(true);
  };
  const handleCloseUpdate = () => setOpenUpdate(false);
  return (
    <>
      <Grid container spacing={2}>
        {regulations.result?.length > 0 &&
          [...regulations.result]
            .sort((a, b) => a.id - b.id)
            .map((reg, index) => {
              return (
                <Grid key={index} item>
                  <SettingCard
                    // handleToggle={handleToggle}
                    id="switch1"
                    regulation={reg}
                    handleOpenUpdate={handleOpenUpdate}
                    // switchValue={switches.switch1}
                  />
                </Grid>
              );
            })}
        {/* <Grid item>
        <SettingCard id="switch4" />
      </Grid> */}
        {/* <AddIcon handleOpen={handleOpen} /> */}
      </Grid>
      <Modal
        open={openUpdate}
        onClose={handleCloseUpdate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxstyle600}>
          <UpdateRegulationForm
            handleCloseUpdate={handleCloseUpdate}
            updateRegulation={updateRegulation}
          />
        </Box>
      </Modal>
    </>
  );
}

export default RegulationPage;
