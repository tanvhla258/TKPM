import React from "react";
import Invoice from "../components/Invoice";
import { Button, Grid, Modal, Box, Typography, Icon } from "@mui/material";
import Dropdown from "../components/Dropdown";
import { boxstyle900, boxstyle600 } from "../constants/boxstyle";
import AddIcon from "../components/AddIcon";
import AddInvoiceForm from "../components/Form/AddInvoiceForm";
import UpdateInvoiceForm from "../components/Form/UpdateInvoiceForm";

function InvoicePage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const handleOpenUpdate = () => setOpenUpdate(true);
  const handleCloseUpdate = () => setOpenUpdate(false);
  return (
    <div style={{ position: "relative" }}>
      <Grid marginTop={2} container spacing={2}>
        <Grid item>
          <Invoice
            cost={200}
            date={Date.now()}
            user={{ name: "Tan" }}
            handleOpenUpdate={handleOpenUpdate}
          ></Invoice>
        </Grid>

        <Grid item>
          <Invoice
            cost={200}
            date={Date.now()}
            user={{ name: "Truong" }}
            handleOpenUpdate={handleOpenUpdate}
          ></Invoice>
        </Grid>
        <Grid item>
          <Invoice
            cost={100}
            date={Date.now()}
            user={{ name: "Trinh" }}
          ></Invoice>
        </Grid>
        <Grid item>
          <Invoice
            cost={300}
            date={Date.now()}
            user={{ name: "Tien" }}
            handleOpenUpdate={handleOpenUpdate}
          ></Invoice>
        </Grid>
        <Grid item>
          <Invoice
            cost={300}
            date={Date.now()}
            user={{ name: "Tien" }}
            handleOpenUpdate={handleOpenUpdate}
          ></Invoice>
        </Grid>
        <Grid item>
          <Invoice
            cost={300}
            date={Date.now()}
            user={{ name: "Tien" }}
            handleOpenUpdate={handleOpenUpdate}
          ></Invoice>
        </Grid>
        <Grid item>
          <Invoice
            cost={300}
            date={Date.now()}
            user={{ name: "Tien" }}
            handleOpenUpdate={handleOpenUpdate}
          ></Invoice>
        </Grid>
        <Grid item>
          <Invoice
            cost={300}
            date={Date.now()}
            user={{ name: "Tien" }}
            handleOpenUpdate={handleOpenUpdate}
          ></Invoice>
        </Grid>
      </Grid>

      <AddIcon handleOpen={handleOpen} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxstyle900}>
          <AddInvoiceForm />
        </Box>
      </Modal>
      <Modal open={openUpdate} onClose={handleCloseUpdate}>
        <Box sx={boxstyle600}>
          <UpdateInvoiceForm />
        </Box>
      </Modal>
    </div>
  );
}

export default InvoicePage;
