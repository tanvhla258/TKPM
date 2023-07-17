import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Box,
  Typography,
  Icon,
  List,
  ListItem,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";

import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { bookActions } from "../../reducers/bookReducer";
import { bookEntryActions } from "../../reducers/bookEntryReducer";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

function AddBookEntryForm({ handleClose }) {
  const [AmountInput, SetAmountInput] = useState(1);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.book.categories);
  useEffect(() => {
    dispatch(bookActions.fetchAllCategories());
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
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
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
          category: { id: +data.category },
        },
      };
      deliveryNoteBooks.push(deliveryNoteBook);
    }
    const newBook = {
      creationDate: data.date,
      shipperName: data.shipperName,
      deliveryNoteBooks: deliveryNoteBooks,
    };
    try {
      dispatch(bookEntryActions.addBookEntry(newBook))
        .unwrap()
        .then(() => {
          Swal.fire("Tạo sách thành công", "OK").then((result) => {
            if (result.isConfirmed) {
              <Navigate to="/book-entries" />;
            }
          });
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error,
          });
        });
    } finally {
      handleClose(true);
    }
  };
  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography alignCenter variant="h6" gutterBottom color="primary">
          Tạo phiếu nhập sách
        </Typography>

        <Grid container spacing={3}>
          <List>
            {Array.from({ length: AmountInput }).map((_, index) => {
              return (
                <ListItem key={index}>
                  <Grid mb={1} item xs={1}>
                    <TextField
                      label={index + 1}
                      fullWidth
                      disabled
                      color="primary"
                      variant="standard"
                    ></TextField>
                  </Grid>
                  <Grid mb={1} item xs={1} />

                  <Grid mb={1} item xs={3}>
                    <TextField
                      {...register(`bookname${index}`, { required: true })}
                      required
                      // id="bookName"
                      name={`bookname${index}`}
                      label="Tên sách "
                      fullWidth
                      variant="standard"
                    />
                  </Grid>
                  <Grid mb={1} item xs={1} />

                  <Grid mb={1} item xs={3}>
                    <TextField
                      {...register(`author${index}`, { required: true })}
                      required
                      // id="author"
                      name={`author${index}`}
                      label="Tác giả"
                      fullWidth
                      variant="standard"
                    />
                  </Grid>
                  <Grid mb={1} item xs={1} />

                  {/* <Grid mb={1} item xs={2}>
                    <TextField
                      required
                      {...register(`cost${index}`, { required: true })}
                      // id="cost"
                      name={`cost${index}`}
                      label="Đơn giá"
                      fullWidth
                      variant="standard"
                    />
                  </Grid> */}
                  <Grid mb={1} item xs={1} />

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
                  <Grid mb={1} item xs={1} />

                  <Grid mb={1} item xs={2}>
                    <InputLabel id={`category`}>Thể loại</InputLabel>

                    <Select
                      {...register(`category`, {
                        required: true,
                      })}
                      required
                      id={`category`}
                      defaultValue={categories[0]?.name}
                      // value={book}
                      name={`category`}
                      labelId={`category`}
                      label="Thể loại"
                      // defaultValue={book[0]}
                      // onChange={handleChange}
                    >
                      {categories.map((cate) => (
                        <MenuItem sx={{ overflow: "clip" }} value={cate.id}>
                          {cate.name}
                        </MenuItem>
                      ))}
                    </Select>
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
          <Grid container alignItems={"end"} spacing={3}>
            <Grid item xs={4}>
              <InputLabel htmlFor="date">Ngày nhập</InputLabel>
              <TextField
                type="date"
                {...register("date", { required: true })}
                id="date"
                name="date"
              />
            </Grid>
            <Grid mb={2} item xs={4}>
              <TextField
                {...register(`shipperName`, { required: true })}
                required
                // id="bookName"
                name={`shipperName`}
                label="Tên Shipper"
                fullWidth
                variant="standard"
              />
            </Grid>
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
    </Box>
  );
}

export default AddBookEntryForm;
