import React from "react";
import Receipt from "../components/Receipt";
import { Button, Grid, Modal, Box, Typography, Icon } from "@mui/material";
import Dropdown from "../components/Dropdown";
import { boxstyle } from "../constants/boxstyle";
import AddIcon from "../components/AddIcon";

function ReceiptPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ position: "relative" }}>
      <Dropdown />
      <Grid marginTop={2} container spacing={2}>
        <Grid item>
          <Receipt
            cost={200}
            date={Date.now()}
            user={{ name: "Tan" }}
            book={{ name: "Khong gia dinh", author: "Tan" }}
          ></Receipt>
        </Grid>

        <Grid item>
          <Receipt
            cost={200}
            date={Date.now()}
            user={{ name: "Truong" }}
            book={{ name: "Khong gia dinh", author: "Tan" }}
          ></Receipt>
        </Grid>
        <Grid item>
          <Receipt
            cost={100}
            date={Date.now()}
            user={{ name: "Trinh" }}
            book={{ name: "Khong gia dinh", author: "Tan" }}
          ></Receipt>
        </Grid>
        <Grid item>
          <Receipt
            cost={300}
            date={Date.now()}
            user={{ name: "Tien" }}
            book={{ name: "Khong gia dinh", author: "Tan" }}
          ></Receipt>
        </Grid>
        <Grid item>
          <Receipt
            cost={300}
            date={Date.now()}
            user={{ name: "Tien" }}
            book={{ name: "Khong gia dinh", author: "Tan" }}
          ></Receipt>
        </Grid>
        <Grid item>
          <Receipt
            cost={300}
            date={Date.now()}
            user={{ name: "Tien" }}
            book={{ name: "Khong gia dinh", author: "Tan" }}
          ></Receipt>
        </Grid>
        <Grid item>
          <Receipt
            cost={300}
            date={Date.now()}
            user={{ name: "Tien" }}
            book={{ name: "Khong gia dinh", author: "Tan" }}
          ></Receipt>
        </Grid>
        <Grid item>
          <Receipt
            cost={300}
            date={Date.now()}
            user={{ name: "Tien" }}
            book={{ name: "Khong gia dinh", author: "Tan" }}
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

export default ReceiptPage;
