//Phieu nhap sach
import React from "react";
import BookEntry from "../components/BookEntry";
import { Button, Grid, Modal, Box, Typography, Icon } from "@mui/material";
import Dropdown from "../components/Dropdown";
import { boxstyle900 } from "../constants/boxstyle";
import AddIcon from "../components/AddIcon";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookEntryActions } from "../reducers/bookEntryReducer";

import AddBookEntryForm from "../components/Form/AddBookEntryForm";
import UpdateBookEntryForm from "../components/Form/UpdateBookEntryForm";
function BookEntryPage() {
  const dispatch = useDispatch();
  const bookEntries = useSelector((state) => state.bookEntry.bookEntries);

  useEffect(() => {
    dispatch(bookEntryActions.fetchAllBookEntries());
  }, [dispatch]);

  console.log(bookEntries);

  const [open, setOpen] = React.useState(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenUpdate = () => setOpenUpdate(true);
  const handleCloseUpdate = () => setOpenUpdate(false);
  return (
    <div style={{ position: "relative" }}>
      <Grid marginTop={2} container spacing={2}>
        {bookEntries.content?.map((be) => {
          return (
            <Grid item>
              <BookEntry bookEntry={be}></BookEntry>
            </Grid>
          );
        })}
      </Grid>

      <AddIcon handleOpen={handleOpen} />

      <Modal open={open} onClose={handleClose}>
        <Box sx={boxstyle900}>
          <AddBookEntryForm />
        </Box>
      </Modal>
      <Modal open={openUpdate} onClose={handleCloseUpdate}>
        <Box sx={boxstyle900}>
          <UpdateBookEntryForm />
        </Box>
      </Modal>
    </div>
  );
}

export default BookEntryPage;
