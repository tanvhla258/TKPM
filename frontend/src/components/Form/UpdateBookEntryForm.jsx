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
  Select,
  MenuItem,
} from "@mui/material";

import { useForm } from "react-hook-form";
import axios from "axios";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { bookActions } from "../../reducers/bookReducer";
import Swal from "sweetalert2";
function UpdateBookEntryForm({ handleCloseUpdate, updateBookEntry }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  // const categories = useSelector((state) => state.book.categories);

  useEffect(() => {
    dispatch(bookActions.fetchAllCategories());
  }, [dispatch]);

  const onSubmit = (data) => {
    const deliveryNoteBooks = [];
    for (let i = 0; i < updateBookEntry.deliveryNoteBooks.length; i++) {
      let bookNameKey = `bookname${i}`;
      let authorKey = `author${i}`;
      let quantityKey = `quantity${i}`;
      const deliveryNoteBook = {
        quantity: +data[quantityKey],
        book: {
          title: data[bookNameKey],
          author: data[authorKey],
          category: {
            id: +updateBookEntry.deliveryNoteBooks[i].book.category.id,
          },
        },
      };
      deliveryNoteBooks.push(deliveryNoteBook);
    }
    const newBookEntry = {
      creationDate: data.date,
      shipperName: updateBookEntry.shipperName,
      deliveryNoteBooks: deliveryNoteBooks,
    };
    try {
      axios
        .post(
          `http://localhost:8080/deliveries/update?id=${updateBookEntry.id}`,
          newBookEntry
        )
        .then((respone) => {
          Swal.fire("Cập nhật thành công", "OK").then((result) => {
            if (result.isConfirmed) {
              // window.location.href = "/book-entries";
              // () => handleClose(true);
            }
          });
          handleCloseUpdate(true);
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
      handleCloseUpdate();
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography alignCenter variant="h6" gutterBottom color="primary">
          Cập nhật phiếu nhập sách
        </Typography>
        <Grid container spacing={3}>
          <List>
            {updateBookEntry.deliveryNoteBooks?.map((item, index) => {
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
                      defaultValue={item.book.title}
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
                  <Grid mb={1} item xs={1} />

                  <Grid mb={1} item xs={3}>
                    <TextField
                      defaultValue={item.book.author}
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
                  <Grid mb={1} item xs={1} />

                  <Grid mb={1} item xs={2}>
                    <TextField
                      defaultValue={item.quantity}
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
                    {/* <InputLabel id={`category`}>Thể loại</InputLabel>

                    <Select
                      {...register(`category`, {
                        required: true,
                      })}
                      required
                      id={`category`}
                      defaultValue={
                        categories.filter(
                          (cate) => cate.id == item.book.category.id
                        ).name
                      }
                      value={book}
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
                    </Select> */}
                  </Grid>
                </ListItem>
              );
            })}
          </List>

          <Grid mb={2} item xs={12}>
            <TextField
              type="date"
              {...register("date", { required: true })}
              id="date"
              name="date"
              defaultValue={updateBookEntry.creationDate}
            />
          </Grid>

          <Grid container justifyContent={"space-between"} item xs={12}>
            <Grid item xs={12} sm={6}>
              <Button variant="outlined" color="success" type="submit">
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

export default UpdateBookEntryForm;
