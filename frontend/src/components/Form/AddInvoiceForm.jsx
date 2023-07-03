import React from "react";
import {
  Button,
  Grid,
  Modal,
  Box,
  Typography,
  Icon,
  List,
  Select,
  MenuItem,
  ListItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookActions } from "../../reducers/bookReducer";
import Swal from "sweetalert2";
function AddInvoiceForm({ handleClose }) {
  const [AmountInput, SetAmountInput] = useState(1);
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);
  // const [book, setBook] = React.useState("");

  // const handleChange = (event) => {
  //   setBook(event.target.value);
  // };
  useEffect(() => {
    dispatch(bookActions.fetchAllBooks());
  }, [dispatch]);

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
    fields,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const bookArray = [];
    for (let i = 0; i < AmountInput; i++) {
      let bookKey = `bookInfo${i}`;
      let costKey = `cost${i}`;
      let quantityKey = `quantity${i}`;
      const book = {
        id: {
          bookId: data[bookKey].id,
        },
        quantity: +data[quantityKey],
        unitPrice: +data[costKey],
        book: data[bookKey],
      };
      bookArray.push(book);
    }
    const newInvoice = {
      bookInvoices: bookArray,
      customer: {
        fullName: data.userName,
        phoneNumber: data.phone,
        address: data.address,
        email: data.email,
      },
      creationDate: data.date,
    };
    try {
      axios
        .post("http://localhost:8080/invoices/add", newInvoice)
        .then((respone) => {
          Swal.fire("Tạo hóa đơn thành công", "OK").then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/invoices";
              // () => handleClose(true);
            }
          });
          handleClose(true);
        })
        .catch((e) => {
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
    } finally {
      handleClose(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography alignCenter variant="h6" gutterBottom color="primary">
          Tạo hóa đơn
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
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
          </Grid>
          <Grid xs={1}></Grid>
          <Grid container xs={12} sm={7}>
            <Grid mb={1} item xs={12}>
              <Typography alignCenter variant="h6" gutterBottom color="primary">
                Chọn sách
              </Typography>
            </Grid>
            <List>
              {Array.from({ length: AmountInput }).map((_, index) => {
                return (
                  <ListItem>
                    <Grid container spacing={3}>
                      <Grid mb={1} item xs={1}>
                        <TextField
                          label={index + 1}
                          fullWidth
                          disabled
                          color="primary"
                          variant="standard"
                        ></TextField>
                      </Grid>

                      <Grid mb={1} item xs={6}>
                        <FormControl fullWidth>
                          <InputLabel id={`bookInfo${index}`}>Sách</InputLabel>
                          <Select
                            {...register(`bookInfo${index}`, {
                              required: true,
                            })}
                            required
                            id={`bookInfo${index}`}
                            // value={book}
                            name={`bookInfo${index}`}
                            labelId={`bookInfo${index}`}
                            label="sách"

                            // defaultValue={book[0]}
                            // onChange={handleChange}
                          >
                            {books.map((book) => (
                              <MenuItem value={book}>
                                {book.title} {book.author}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
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
                    </Grid>
                  </ListItem>
                );
              })}
            </List>
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

          <Grid container item xs={12}>
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

export default AddInvoiceForm;
