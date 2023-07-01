import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Modal,
  Box,
  Typography,
  Icon,
  List,
  InputLabel,
  ListItem,
  Select,
  MenuItem,
} from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useForm } from "react-hook-form";
import axios from "axios";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../reducers/userReducer";
import Swal from "sweetalert2";

function AddReceiptForm({ handleClose }) {
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
        fullName: data.userInfo.fullName,
        phoneNumber: data.userInfo.phoneNumber,
        address: data.userInfo.address,
        email: data.userInfo.email,
        id: data.userInfo.id,
      },
    };
    console.log(newReceipt);
    try {
      axios
        .post("http://localhost:8080/receipts/add", newReceipt)
        .then((respone) => {
          console.log(respone.data);
          Swal.fire("Tạo phiếu thu thành công", "OK").then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/receipts";
              // () => handleClose(true);
            }
          });
        });
    } catch (e) {}
  };
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(userActions.fetchAllUser());
  }, [dispatch]);

  console.log(users);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography alignCenter variant="h6" gutterBottom color="primary">
          Tạo phiếu thu tiền
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid mb={1} item xs={12}>
              <InputLabel id={`userInfo`}>Khách hàng</InputLabel>
              <Select
                {...register(`userInfo`, {
                  required: true,
                })}
                required
                id={`userInfo`}
                // value={book}
                name={`userInfo`}
                labelId={`userInfo`}
                label="sách"
                // defaultValue={book[0]}
                // onChange={handleChange}
              >
                {users.map((user) => (
                  <MenuItem value={user}>{user.fullName}</MenuItem>
                ))}
              </Select>
            </Grid>

            {/* <Grid mb={1} item xs={12}>
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
            </Grid> */}
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
            <InputLabel htmlFor="date">Ngày nhập</InputLabel>
            <TextField
              type="date"
              {...register("date", { required: true })}
              id="date"
              name="date"
            />
          </Grid>

          <Grid container justifyContent={"space-between"} item xs={12}>
            <Grid item xs={12} sm={6}>
              <Button variant="outlined" color="success" type="submit">
                Tạo phiếu
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                onClick={() => handleClose()}
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

export default AddReceiptForm;
