import React from "react";
import Bill from "../components/Bill";
import { Button, Grid, Modal, Box, Typography, Icon } from "@mui/material";
import Dropdown from "../components/Dropdown";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function OrdersPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ position: "relative" }}>
      <Dropdown />
      <Grid marginTop={2} container spacing={2}>
        <Grid item>
          <Bill
            name="Sherlock Homles"
            author={"conan doley"}
            category="detective"
            quantity={50}
          ></Bill>
        </Grid>

        <Grid item>
          <Bill
            name="Sherlock Homles"
            author={"conan doley"}
            category="detective"
            quantity={50}
          ></Bill>
        </Grid>
        <Grid item>
          <Bill
            name="Sherlock Homles"
            author={"conan doley"}
            category="detective"
            quantity={50}
          ></Bill>
        </Grid>
        <Grid item>
          <Bill
            name="Sherlock Homles"
            author={"conan doley"}
            category="detective"
            quantity={50}
          ></Bill>
        </Grid>
        <Grid item>
          <Bill
            name="Sherlock Homles"
            author={"conan doley"}
            category="detective"
            quantity={50}
          ></Bill>
        </Grid>
      </Grid>

      <Icon
        style={{
          position: "absolute",
          // zIndex: "10",
          cursor: "pointer",
          right: 0,
          bottom: 0,
        }}
        onClick={handleOpen}
        color="primary"
        fontSize="large"
      >
        add_circle
      </Icon>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default OrdersPage;
