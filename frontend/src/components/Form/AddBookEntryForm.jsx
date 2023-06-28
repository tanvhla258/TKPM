import React, { useState } from "react";
import { Button, Grid, Modal, Box, Typography, Icon } from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useForm } from "react-hook-form";

import { TextField } from "@mui/material";

function AddBookEntryForm() {
  const [addInput, SetAddInput] = useState(0);
  const handleAddInput = () => {
    SetAddInput((addInput) => addInput + 1);
  };
  const handleMinusInput = () => {
    if (addInput >= 1) SetAddInput((addInput) => addInput - 1);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography alignCenter variant="h6" gutterBottom color="primary">
          Tạo phiếu nhập sách
        </Typography>
        <Grid container spacing={3}>
          <Grid mb={1} item xs={1}>
            <TextField
              label={1}
              fullWidth
              disabled
              color="primary"
              variant="standard"
            ></TextField>
          </Grid>
          <Grid mb={1} item xs={3}>
            <TextField
              {...register("bookName", { required: true })}
              required
              id="bookName"
              name="bookName"
              label="Tên sách "
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid mb={1} item xs={3}>
            <TextField
              {...register("author", { required: true })}
              required
              id="author"
              name="author"
              label="Tác giả"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid mb={1} item xs={3}>
            <TextField
              required
              {...register("cost", { required: true })}
              id="cost"
              name="cost"
              label="Đơn giá"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid mb={1} item xs={2}>
            <TextField
              required
              {...register("cost", { required: true })}
              id="quantity"
              name="quantity"
              label="Số lượng"
              fullWidth
              variant="standard"
            />
          </Grid>
          {Array.from({ length: addInput }).map((_, index) => {
            return (
              <>
                <Grid mb={1} item xs={1}>
                  <TextField
                    label={index + 2}
                    fullWidth
                    disabled
                    color="primary"
                    variant="standard"
                  ></TextField>
                </Grid>
                <Grid mb={1} item xs={3}>
                  <TextField
                    {...register("bookName", { required: true })}
                    required
                    id="bookName"
                    name="bookName"
                    label="Tên sách "
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                  />
                </Grid>
                <Grid mb={1} item xs={3}>
                  <TextField
                    {...register("author", { required: true })}
                    required
                    id="author"
                    name="author"
                    label="Tác giả"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                  />
                </Grid>
                <Grid mb={1} item xs={3}>
                  <TextField
                    required
                    {...register("cost", { required: true })}
                    id="cost"
                    name="cost"
                    label="Đơn giá"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid mb={1} item xs={2}>
                  <TextField
                    required
                    {...register("cost", { required: true })}
                    id="quantity"
                    name="quantity"
                    label="Số lượng"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
              </>
            );
          })}
          <Grid mb={1} item xs={12}>
            <Icon
              style={{
                cursor: "pointer",
              }}
              onClick={handleAddInput}
              color="primary"
              fontSize="large"
            >
              add_circle
            </Icon>
            <Icon
              style={{
                cursor: "pointer",
              }}
              onClick={handleMinusInput}
              color="error"
              fontSize="large"
            >
              remove_circle
            </Icon>
          </Grid>

          <Grid mb={2} item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Ngày nhập"
                slotProps={{ textField: { fullWidth: true } }}
                {...register("date", { required: true })}
              />
            </LocalizationProvider>
          </Grid>

          <Grid container justifyContent={"space-between"} item xs={12}>
            <Grid item xs={12} sm={6}>
              <Button variant="outlined" color="success" type="submit">
                Tạo phiếu
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button variant="outlined" color="primary">
                Quay lại
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default AddBookEntryForm;
