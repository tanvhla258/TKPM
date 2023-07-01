import React from "react";
import Receipt from "../components/Receipt";
import { Button, Grid, Modal, Box, Typography, Icon } from "@mui/material";
import Dropdown from "../components/Dropdown";
import { boxstyle } from "../constants/boxstyle";
import AddIcon from "../components/AddIcon";
import PayUpForm from "../components/Form/PayUpForm";
import AddReceiptForm from "../components/Form/AddReceiptForm";
import UpdateReceiptForm from "../components/Form/UpdateReceiptForm";
import { useDispatch, useSelector } from "react-redux";
import { receiptActions } from "../reducers/receiptReducer";
import { useEffect } from "react";
function ReceiptPage() {
  const [open, setOpen] = React.useState(false);
  const [updateReceipt, setUpdateReceipt] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const handleOpenUpdate = (data) => {
    setUpdateReceipt(data);
    setOpenUpdate(true);
  };
  const handleCloseUpdate = () => setOpenUpdate(false);

  const dispatch = useDispatch();
  const receipts = useSelector((state) => state.receipt.receipts);
  useEffect(() => {
    dispatch(receiptActions.fetchAllReceipt());
  }, [dispatch]);

  console.log(receipts);

  return (
    <div style={{ position: "relative" }}>
      <Grid marginTop={2} container spacing={2}>
        {receipts?.content?.map((receipt) => {
          return (
            <Grid item>
              <Receipt
                receipt={receipt}
                handleOpenUpdate={handleOpenUpdate}
              ></Receipt>
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
        <Box sx={boxstyle}>
          <AddReceiptForm handleClose={handleClose} />
        </Box>
      </Modal>
      <Modal
        open={openUpdate}
        onClose={handleCloseUpdate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxstyle}>
          <UpdateReceiptForm
            handleCloseUpdate={handleCloseUpdate}
            updateReceipt={updateReceipt}
          />
        </Box>
      </Modal>
    </div>
  );
}

export default ReceiptPage;
