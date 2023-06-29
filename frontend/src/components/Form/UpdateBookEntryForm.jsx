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

function UpdateBookEntryForm({ book }) {
  const [value, setValue] = useState(dayjs(Date.now()));

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // console.log(data.date);

    const newBookEntry = {
      creationDate: "2020-06-12",
      shipperName: "Nguyen Van A",
    };
    console.log(newBookEntry);
    try {
      axios
        .post("http://localhost:8080/deliveries/add", newBookEntry)
        .then((respone) => {
          console.log(respone.data);
        });
    } catch (e) {}
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography alignCenter variant="h6" gutterBottom color="primary">
          Cập nhật phiếu nhập sách
        </Typography>
        <Grid container spacing={3}>
          <Grid mb={1} item xs={3}>
            <TextField
              {...register(`bookname`, { required: true })}
              required
              // id="bookName"
              name={`bookname`}
              label="Tên sách "
              fullWidth
              autoComplete="given-name"
              variant="standard"
              // defaultValue={book.name}
            />
          </Grid>
          <Grid mb={1} item xs={3}>
            <TextField
              {...register(`author`, { required: true })}
              required
              // id="author"
              name={`author`}
              label="Tác giả"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid mb={1} item xs={3}>
            <TextField
              required
              {...register(`cost`, { required: true })}
              // id="cost"
              name={`cost`}
              label="Đơn giá"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid mb={1} item xs={2}>
            <TextField
              required
              {...register(`quantity`, { required: true })}
              // id="quantity"
              name={`quantity`}
              label="Số lượng"
              fullWidth
              variant="standard"
            />
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

export default UpdateBookEntryForm;
