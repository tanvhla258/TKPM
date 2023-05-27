//Phieu nhap sach
import React from "react";
import BookEntry from "../components/BookEntry";
import { Button, Grid, Modal, Box, Typography, Icon } from "@mui/material";
import Dropdown from "../components/Dropdown";
import { boxstyle } from "../constants/boxstyle";
function BookEntryPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ position: "relative" }}>
      <Dropdown />
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
        <Box sx={boxstyle}>
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

export default BookEntryPage;
