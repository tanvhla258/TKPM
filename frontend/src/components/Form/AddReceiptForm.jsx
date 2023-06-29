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
} from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useForm } from "react-hook-form";
import axios from "axios";
import { TextField } from "@mui/material";

function AddReceiptForm() {
  const [AmountInput, SetAmountInput] = useState(1);
  const [value, setValue] = useState(dayjs(Date.now()));

  const handleAddInput = () => {
    SetAmountInput((AmountInput) => AmountInput + 1);
  };
  const handleMinusInput = () => {
    if (AmountInput >= 1) SetAmountInput((AmountInput) => AmountInput - 1);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // console.log(data.date);

    const newReceipt = {
      creationDate: "2023-06-28",
      totalCost: data.cost,
      customer: {
        fullName: data.userName,
        phoneNumber: data.phone,
        address: data.address,
        email: data.email,
        id: 1,
      },
    };
    console.log(newReceipt);
    try {
      axios
        .post("http://localhost:8080/receipts/add", newReceipt)
        .then((respone) => {
          console.log(respone.data);
        });
    } catch (e) {}
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography alignCenter variant="h6" gutterBottom color="primary">
          Tạo phiếu thu tiền
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid mb={1} item xs={12}>
              <TextField
                {...register("userName", { required: true })}
                required
                id="userName"
                name="userName"
                label="Tên khách hàng "
                fullWidth
                variant="standard"
              />
            </Grid>

            <Grid mb={1} item xs={12}>
              <TextField
                required
                {...register("phone", { required: true })}
                id="phone"
                name="phone"
                label="Số điện thoại"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid mb={1} item xs={12}>
              <TextField
                required
                {...register("email", { required: true })}
                id="email"
                name="email"
                label="Email"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid mb={1} item xs={12}>
              <TextField
                required
                {...register("address", { required: true })}
                id="address"
                name="address"
                label="Địa chỉ"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid mb={1} item xs={12}>
              <TextField
                required
                {...register("cost", { required: true })}
                id="cost"
                name="cost"
                label="Số tiền thu"
                fullWidth
                variant="standard"
              />
            </Grid>
          </Grid>

          <Grid mb={2} item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Ngày nhập"
                id="date"
                name="date"
                value={value}
                slotProps={{ textField: { fullWidth: true } }}
                {...register("date", { required: true })}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
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

export default AddReceiptForm;
