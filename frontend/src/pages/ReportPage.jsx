import React, { useState } from "react";
import Book from "../components/Book";
import { useEffect } from "react";
import { Button, Grid, Modal, Box, Typography, Icon, InputLabel } from "@mui/material";
import Dropdown from "../components/Dropdown";
import { TextField } from "@mui/material";

function ReportPage() {
  var names = ["Công nợ","Tồn sách"];
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Dropdown label={"Loại báo cáo"} inputArray={names} />
        {/* <InputLabel htmlFor="date">Ngày nhập</InputLabel> */}
        {/* <TextField
          type="date"
          {...register("date", { required: true })}
          id="date"
          name="date"
        /> */}
      </div>

      {/* <AddIcon handleOpen={handleOpen} /> */}

      {/* <Modal
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
      </Modal> */}
    </div>
  );
}

export default ReportPage;
