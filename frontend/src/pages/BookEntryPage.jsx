//Phieu nhap sach
import React from "react";
import BookEntry from "../components/BookEntry";
import { Button, Grid, Modal, Box, Typography, Icon } from "@mui/material";
import Dropdown from "../components/Dropdown";
import { boxstyle600 } from "../constants/boxstyle";
import AddIcon from "../components/AddIcon";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  FormControlLabel,
  FormControl,
  TextField,
  Checkbox,
} from "@mui/material";
import AddBookEntryForm from "../components/Form/AddBookEntryForm";
function BookEntryPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ position: "relative" }}>
      <Grid marginTop={2} container spacing={2}>
        <Grid item>
          <BookEntry
            cost={200}
            date={Date.now()}
            book={{ name: "Khong gia dinh", author: "Tan" }}
          ></BookEntry>
        </Grid>

        <Grid item>
          <BookEntry
            cost={200}
            date={Date.now()}
            book={{ name: "Harry Potter", author: "Trinh" }}
          ></BookEntry>
        </Grid>
        <Grid item>
          <BookEntry
            cost={100}
            date={Date.now()}
            book={{ name: "Harry Potter", author: "Trinh" }}
          ></BookEntry>
        </Grid>
        <Grid item>
          <BookEntry
            cost={300}
            date={Date.now()}
            book={{ name: "Harry Potter", author: "Trinh" }}
          ></BookEntry>
        </Grid>
      </Grid>

      <AddIcon handleOpen={handleOpen} />

      <Modal open={open} onClose={handleClose}>
        <Box sx={boxstyle600}>
          <AddBookEntryForm />
        </Box>
      </Modal>
    </div>
  );
}

export default BookEntryPage;
