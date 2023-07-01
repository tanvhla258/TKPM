import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Modal,
  Box,
  Typography,
  Icon,
  List,
  ListItem,
  InputLabel,
} from "@mui/material";
import dayjs from "dayjs";

import { useForm } from "react-hook-form";
import axios from "axios";
import { TextField } from "@mui/material";
import { regulationActions } from "../../reducers/regulationReducer";

function UpdateRegulationForm({
  handleOpenUpdate,
  updateRegulation,
  handleCloseUpdate,
}) {
  const [value, setValue] = useState(dayjs(Date.now()));
  console.log(updateRegulation);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // console.log(data.date);
    const newRegulation = {};
    try {
      axios
        .post("http://localhost:8080/regulations/update", newRegulation)
        .then((respone) => {
          console.log(respone.data);
          Swal.fire("Cập nhật quy định thành công", "OK").then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/receipts";
              // () => handleClose(true);
            }
          });
        })
        .catch((e) => {
          console.log("loi:", e);

          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: e.response.data.message,
          }).then((result) => {
            if (result.isConfirmed) {
              // window.location.href = "/book-entries";
            }
          });
        });
    } catch (e) {}
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography alignCenter variant="h6" gutterBottom color="primary">
          Cập nhật quy định
        </Typography>
        <Grid container spacing={3}>
          <Grid mb={1} item xs={12}>
            <TextField
              {...register("value", { required: true })}
              required
              id="userName"
              name="userName"
              label={updateRegulation.title}
              fullWidth
              variant="standard"
              defaultValue={updateRegulation.value}
            />
          </Grid>

          <Grid container justifyContent={"space-between"} item x={12}>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={handleOpenUpdate}
                variant="outlined"
                color="success"
                type="submit"
              >
                Cập nhật
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                onClick={() => handleCloseUpdate()}
                variant="outlined"
                color="primary"
              >
                Quay lại
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default UpdateRegulationForm;
