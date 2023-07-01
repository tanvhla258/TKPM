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

function UpdateReceiptForm({
  handleOpenUpdate,
  updateReceipt,
  handleCloseUpdate,
}) {
  const [value, setValue] = useState(dayjs(Date.now()));
  console.log(updateReceipt);
  const {
    register,
    handleSubmit,
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
        .post("http://localhost:8080/receipts/update", newReceipt)
        .then((respone) => {
          console.log(respone.data);
          Swal.fire("Cập nhật phiếu thu thành công", "OK").then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/receipts";
              // () => handleClose(true);
            }
          });
        });
    } catch (e) {}
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography alignCenter variant="h6" gutterBottom color="primary">
          Cập nhật phiếu thu tiền
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
                defaultValue={updateReceipt.customer.fullName}
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
                defaultValue={updateReceipt.customer.phoneNumber}
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
                defaultValue={updateReceipt.customer.email}
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
                defaultValue={updateReceipt.customer.address}
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
                defaultValue={updateReceipt.totalCost}
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
              defaultValue={updateReceipt.creationDate}
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
                Cập nhật phiếu
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

export default UpdateReceiptForm;
