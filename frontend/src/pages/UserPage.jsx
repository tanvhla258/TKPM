import React from "react";
import User from "../components/User";
import { Grid, Typography, Modal, Box } from "@mui/material";
import { boxstyle } from "../constants/boxstyle";
import AddIcon from "../components/AddIcon";
import AddUserForm from "../components/Form/AddUserForm";
function UserPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ position: "relative" }}>
      <Grid marginTop={2} container spacing={2}>
        <Grid item>
          <User
            name="Tan"
            address="Ho chi minh"
            phone="0323658878"
            email="tan@gmail.com"
          ></User>
        </Grid>

        <Grid item>
          <User
            name="Tan"
            address="Ho chi minh"
            phone="0323658878"
            email="tan@gmail.com"
          ></User>
        </Grid>
        <Grid item>
          <User
            name="Tan"
            address="Ho chi minh"
            phone="0323658878"
            email="tan@gmail.com"
          ></User>
        </Grid>
        <Grid item>
          <User
            name="Tan"
            address="Ho chi minh"
            phone="0323658878"
            email="tan@gmail.com"
          ></User>
        </Grid>
        <Grid item>
          <User
            name="Tan"
            address="Ho chi minh"
            phone="0323658878"
            email="tan@gmail.com"
          ></User>
        </Grid>
      </Grid>

      <AddIcon handleOpen={handleOpen} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxstyle}>
          <AddUserForm></AddUserForm>
        </Box>
      </Modal>
    </div>
  );
}

export default UserPage;
