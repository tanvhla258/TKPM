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
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
function ReportPage() {
  const names = ["Công nợ", "Tồn sách"];
  const [dropdownData, setdropdownData] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    try {
      axios
        .get(
          `http://localhost:8080/report/inventory?month=${data.date.slice(
            -2
          )}&year=${data.date.slice(4)}`
        )
        .then((respone) => {
          console.log(respone.data);
          Swal.fire("Lập công nợ thành công", "OK").then((result) => {
            if (result.isConfirmed) {
              // window.location.href = "/reports";
              // () => handleClose(true);
            }
          });
        });
    } catch (e) {}
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container alignItems={"end"} spacing={3}>
        <Grid item>
          <Dropdown
            setdropdownData={setdropdownData}
            label={"Loại báo cáo"}
            inputArray={names}
          />
        </Grid>
        <Grid item>
          <InputLabel htmlFor="date">Ngày nhập</InputLabel>
          <TextField
            type="month"
            // {...register("date", { required: true })}
            id="date"
            name="date"
            {...register("date", { required: true })}
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
    </form>
  );
}

export default ReportPage;
