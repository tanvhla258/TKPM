import React from "react";
import Receipt from "../components/Receipt";
import { Button, Grid, Modal, Box, Typography, Icon } from "@mui/material";
import Dropdown from "../components/Dropdown";
import { boxstyle } from "../constants/boxstyle";
import AddIcon from "../components/AddIcon";
import PayUpForm from "../components/Form/PayUpForm";
import AddReceiptForm from "../components/Form/AddReceiptForm";
import UpdateReceiptForm from "../components/Form/UpdateReceiptForm";

function ReceiptPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const handleOpenUpdate = () => setOpenUpdate(true);
  const handleCloseUpdate = () => setOpenUpdate(false);
  const receipt = {
    creationDate: "2023-06-28",
    totalCost: 200000,
    customer: {
      fullName: "Kim Tien",
      phoneNumber: "123",
      address: "Ho Chi Minh",
      email: "20120210@student.hcmus.edu.vn",
      id: 1,
    },
  };
  return (
    <div style={{ position: "relative" }}>
      <Grid marginTop={2} container spacing={2}>
        <Grid item>
          <Receipt
            receipt={receipt}
            handleOpenUpdate={handleOpenUpdate}
          ></Receipt>
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
          <AddReceiptForm />
        </Box>
      </Modal>
      <Modal
        open={openUpdate}
        onClose={handleCloseUpdate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxstyle}>
          <UpdateReceiptForm />
        </Box>
      </Modal>
    </div>
  );
}

export default ReceiptPage;
