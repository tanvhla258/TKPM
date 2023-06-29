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

function AddBookEntryForm() {
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
    const deliveryNoteBooks = [];
    for (let i = 0; i < AmountInput; i++) {
      let bookNameKey = `bookname${i}`;
      let authorKey = `author${i}`;
      let quantityKey = `quantity${i}`;
      const deliveryNoteBook = {
        quantity: +data[quantityKey],
        book: {
          title: data[bookNameKey],
          author: data[authorKey],
          category: {
            name: "Van hoc",
          },
        },
      };
      deliveryNoteBooks.push(deliveryNoteBook);
    }
    const newBook = {
      creationDate: "2020-06-12",
      shipperName: "Nguyen Van A",
      deliveryNoteBooks: deliveryNoteBooks,
    };
    console.log(newBook);
    try {
      axios
        .post("http://localhost:8080/deliveries/add", newBook)
        .then((respone) => {
          console.log(respone.data);
        });
    } catch (e) {}
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography alignCenter variant="h6" gutterBottom color="primary">
          Tạo phiếu nhập sách
        </Typography>
        <Grid container spacing={3}>
          <List>
            {Array.from({ length: AmountInput }).map((_, index) => {
              return (
                <ListItem>
                  <Grid mb={1} item xs={1}>
                    <TextField
                      label={index + 1}
                      fullWidth
                      disabled
                      color="primary"
                      variant="standard"
                    ></TextField>
                  </Grid>
                  <Grid mb={1} item xs={3}>
                    <TextField
                      {...register(`bookname${index}`, { required: true })}
                      required
                      // id="bookName"
                      name={`bookname${index}`}
                      label="Tên sách "
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                    />
                  </Grid>
                  <Grid mb={1} item xs={3}>
                    <TextField
                      {...register(`author${index}`, { required: true })}
                      required
                      // id="author"
                      name={`author${index}`}
                      label="Tác giả"
                      fullWidth
                      autoComplete="family-name"
                      variant="standard"
                    />
                  </Grid>
                  <Grid mb={1} item xs={3}>
                    <TextField
                      required
                      {...register(`cost${index}`, { required: true })}
                      // id="cost"
                      name={`cost${index}`}
                      label="Đơn giá"
                      fullWidth
                      variant="standard"
                    />
                  </Grid>
                  <Grid mb={1} item xs={2}>
                    <TextField
                      required
                      {...register(`quantity${index}`, { required: true })}
                      // id="quantity"
                      name={`quantity${index}`}
                      label="Số lượng"
                      fullWidth
                      variant="standard"
                    />
                  </Grid>
                </ListItem>
              );
            })}
          </List>
          {/* {Array.from({ length: AmountInput }).map((_, index) => {
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
                    // id="bookName"
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
                    // id="author"
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
                    // id="cost"
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
                    // id="quantity"
                    name="quantity"
                    label="Số lượng"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
              </>
            );
          })} */}
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

export default AddBookEntryForm;
