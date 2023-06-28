import React from "react";
import Invoice from "../components/Invoice";
import { Button, Grid, Modal, Box, Typography, Icon } from "@mui/material";
import Dropdown from "../components/Dropdown";
import { boxstyle } from "../constants/boxstyle";
import AddIcon from "../components/AddIcon";
import AddInvoiceForm from "../components/Form/AddInvoiceForm";

function InvoicePage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ position: "relative" }}>
      <Dropdown />
      <Grid marginTop={2} container spacing={2}>
        <Grid item>
          <Invoice
            cost={200}
            date={Date.now()}
            user={{ name: "Tan" }}
          ></Invoice>
        </Grid>

        <Grid item>
          <Invoice
            cost={200}
            date={Date.now()}
            user={{ name: "Truong" }}
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
          ></Invoice>
        </Grid>
        <Grid item>
          <Invoice
            cost={300}
            date={Date.now()}
            user={{ name: "Tien" }}
          ></Invoice>
        </Grid>
        <Grid item>
          <Invoice
            cost={300}
            date={Date.now()}
            user={{ name: "Tien" }}
          ></Invoice>
        </Grid>
        <Grid item>
          <Invoice
            cost={300}
            date={Date.now()}
            user={{ name: "Tien" }}
          ></Invoice>
        </Grid>
        <Grid item>
          <Invoice
            cost={300}
            date={Date.now()}
            user={{ name: "Tien" }}
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
        <Box sx={boxstyle}>
          <AddInvoiceForm />
        </Box>
      </Modal>
    </div>
  );
}

export default InvoicePage;
