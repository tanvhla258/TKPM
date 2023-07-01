import React from "react";
import Invoice from "../components/Invoice";
import { Button, Grid, Modal, Box, Typography, Icon } from "@mui/material";
import Dropdown from "../components/Dropdown";
import { boxstyle900, boxstyle600 } from "../constants/boxstyle";
import AddIcon from "../components/AddIcon";
import AddInvoiceForm from "../components/Form/AddInvoiceForm";
import UpdateInvoiceForm from "../components/Form/UpdateInvoiceForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { invoiceActions } from "../reducers/invoiceReducer";

function InvoicePage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const handleOpenUpdate = (data) => {
    setOpenUpdate(true);
    setUpdateInvoice(data);
  };
  const handleCloseUpdate = () => setOpenUpdate(false);

  const [updateInvoice, setUpdateInvoice] = React.useState(false);

  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.invoice.invoices);
  useEffect(() => {
    dispatch(invoiceActions.fetchAllInvoice());
  }, [dispatch]);
  console.log(invoices);
  return (
    <div style={{ position: "relative" }}>
      <Grid marginTop={2} container spacing={2}>
        {/* <Grid item>
          <Invoice
            cost={200}
            date={Date.now()}
            user={{ name: "Tan" }}
            handleOpenUpdate={handleOpenUpdate}
          ></Invoice>
        </Grid> */}
        {invoices?.content?.map((invoice) => {
          return (
            <Grid item>
              <Invoice
                invoice={invoice}
                handleOpenUpdate={handleOpenUpdate}
              ></Invoice>
            </Grid>
          );
        })}
      </Grid>

      <AddIcon handleOpen={handleOpen} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxstyle900}>
          <AddInvoiceForm handleClose={handleClose} />
        </Box>
      </Modal>
      <Modal open={openUpdate} onClose={handleCloseUpdate}>
        <Box sx={boxstyle900}>
          <UpdateInvoiceForm
            handleCloseUpdate={handleCloseUpdate}
            updateInvoice={updateInvoice}
          />
        </Box>
      </Modal>
    </div>
  );
}

export default InvoicePage;
