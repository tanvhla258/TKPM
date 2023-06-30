import React, { useState } from "react";
import Book from "../components/Book";
import { useEffect } from "react";
import {
  Button,
  Grid,
  Modal,
  Box,
  Typography,
  Icon,
  InputLabel,
} from "@mui/material";
import Dropdown from "../components/Dropdown";
import { TextField } from "@mui/material";

function ReportPage() {
  const names = ["Công nợ", "Tồn sách"];
  return (
    <div>
      <Grid container alignItems={"end"} spacing={3}>
        <Grid item>
          <Dropdown label={"Loại báo cáo"} inputArray={names} />
        </Grid>
        <Grid item>
          <InputLabel htmlFor="date">Ngày nhập</InputLabel>
          <TextField
            type="month"
            // {...register("date", { required: true })}
            id="date"
            name="date"
            min="2022-03"
            // value="2023-06"
          />
        </Grid>
        <Grid item>
          <Button variant="outlined" color="success" type="submit">
            Lập báo cáo
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default ReportPage;
