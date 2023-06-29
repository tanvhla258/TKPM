//Phieu nhap sach
import React from "react";
import BookEntry from "../components/BookEntry";
import { Button, Grid, Modal, Box, Typography, Icon } from "@mui/material";
import Dropdown from "../components/Dropdown";
import { boxstyle600 } from "../constants/boxstyle";
import AddIcon from "../components/AddIcon";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookActions } from "../reducers/bookReducer";

import AddBookEntryForm from "../components/Form/AddBookEntryForm";
import UpdateBookEntryForm from "../components/Form/UpdateBookEntryForm";
function BookEntryPage() {
  // const dispatch = useDispatch();
  // const books = useSelector((state) => state.book.books);

  // useEffect(() => {
  //   dispatch(bookActions.fetchAllBooks());
  // }, [dispatch]);

  // console.log(books);

  const [open, setOpen] = React.useState(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenUpdate = () => setOpenUpdate(true);
  const handleCloseUpdate = () => setOpenUpdate(false);
  return (
    <div style={{ position: "relative" }}>
      <Grid marginTop={2} container spacing={2}>
        <Grid item>
          <BookEntry
            cost={200}
            date={Date.now()}
            book={{ name: "Khong gia dinh", author: "Tan" }}
            handleOpenUpdate={handleOpenUpdate}
          ></BookEntry>
        </Grid>

        <Grid item>
          <BookEntry
            cost={200}
            date={Date.now()}
            book={{ name: "Harry Potter", author: "Trinh" }}
            handleOpenUpdate={handleOpenUpdate}
          ></BookEntry>
        </Grid>
        <Grid item>
          <BookEntry
            cost={100}
            date={Date.now()}
            book={{ name: "Harry Potter", author: "Trinh" }}
            handleOpenUpdate={handleOpenUpdate}
          ></BookEntry>
        </Grid>
        <Grid item>
          <BookEntry
            cost={300}
            date={Date.now()}
            book={{ name: "Harry Potter", author: "Trinh" }}
            handleOpenUpdate={handleOpenUpdate}
          ></BookEntry>
        </Grid>
      </Grid>

      <AddIcon handleOpen={handleOpen} />

      <Modal open={open} onClose={handleClose}>
        <Box sx={boxstyle600}>
          <AddBookEntryForm />
        </Box>
      </Modal>
      <Modal open={openUpdate} onClose={handleCloseUpdate}>
        <Box sx={boxstyle600}>
          <UpdateBookEntryForm />
        </Box>
      </Modal>
    </div>
  );
}

export default BookEntryPage;
