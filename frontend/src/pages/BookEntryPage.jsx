//Phieu nhap sach
import React, { useState } from "react";
import BookEntry from "../components/BookEntry";
import { Button, Grid, Modal, Box, Typography, Icon } from "@mui/material";
import { boxstyle900 } from "../constants/boxstyle";
import AddIcon from "../components/AddIcon";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookEntryActions } from "../reducers/bookEntryReducer";

import AddBookEntryForm from "../components/Form/AddBookEntryForm";
import UpdateBookEntryForm from "../components/Form/UpdateBookEntryForm";
function BookEntryPage() {
  const dispatch = useDispatch();
  const bookEntriesFetch = useSelector((state) => state.bookEntry.bookEntries);
  useEffect(() => {
    dispatch(bookEntryActions.fetchAllBookEntries());
  }, [dispatch]);
  console.log(bookEntriesFetch);
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [updateBookEntry, setUpdateBookEntry] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenUpdate = (data) => {
    setOpenUpdate(true);
    setUpdateBookEntry(data);
  };
  const handleCloseUpdate = () => setOpenUpdate(false);
  return (
    <div style={{ position: "relative" }}>
      <Grid marginTop={2} container spacing={2}>
        {bookEntriesFetch?.content?.length == 0 && (
          <Typography
            fontWeight={600}
            sx={{ ml: 5.5 }}
            variant="h5"
            component="div"
          >
            Hiện tại chưa có phiếu nhập sách trong hệ thống
          </Typography>
        )}
        {bookEntriesFetch?.content?.map((be) => {
          return (
            <Grid key={be.id} item>
              <BookEntry
                handleOpenUpdate={handleOpenUpdate}
                bookEntry={be}
              ></BookEntry>
            </Grid>
          );
        })}
      </Grid>

      <AddIcon handleOpen={handleOpen} />

      <Modal open={open} onClose={handleClose}>
        <Box sx={boxstyle900}>
          <AddBookEntryForm setOpen={setOpen} handleClose={handleClose} />
        </Box>
      </Modal>
      <Modal open={openUpdate} onClose={handleCloseUpdate}>
        <Box sx={boxstyle900}>
          <UpdateBookEntryForm
            updateBookEntry={updateBookEntry}
            handleCloseUpdate={handleCloseUpdate}
          />
        </Box>
      </Modal>
    </div>
  );
}

export default BookEntryPage;
