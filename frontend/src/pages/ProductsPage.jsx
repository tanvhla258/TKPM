import React, { useState } from "react";
import Book from "../components/Book";
import { useEffect } from "react";
import {
  Button,
  Grid,
  Modal,
  Box,
  Typography,
  Icon,
  TextField,
  InputAdornment,
} from "@mui/material";
import Dropdown from "../components/Dropdown";
import { boxstyle } from "../constants/boxstyle";
import AddIcon from "../components/AddIcon";
import SearchIcon from "@mui/icons-material/Search";
import {
  StyledInputBase,
  SearchIconWrapper,
  Search,
} from "../constants/styleComponent.js";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { bookActions } from "../reducers/bookReducer";
import { useForm } from "react-hook-form";
function ProductsPage() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);
  const categories = useSelector((state) => state.book.categories);
  const [searchInfo, setSearchInfo] = useState([]);
  useEffect(() => {
    dispatch(bookActions.fetchAllBooks());
    dispatch(bookActions.fetchAllCategories());
  }, [dispatch]);
  console.log(searchInfo);
  const bookRender = searchInfo.content ? searchInfo.content : books;
  const categoriesName = categories.map((cate) => cate.name);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    try {
      axios
        .get(
          `http://localhost:8080/books/search?title=${data.search}&page=0&size=10`
        )
        .then((respone) => {
          console.log(respone.data);
          setSearchInfo(respone.data);
        })
        .catch((e) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Không tìm thấy theo yêu cầu",
          }).then((result) => {
            if (result.isConfirmed) {
              // window.location.href = "/book-entries";
            }
          });
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", gap: 20 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            // style={{ width: "50%" }}
            {...register("search", { required: true })}
            required
            id="search"
            name="search"
            label="Tìm sách"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleSubmit(onSubmit);
                // write your functionality here
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            fullWidth
          />
          {/* <Button
            // onClick={handleOpenUpdate}
            variant="outlined"
            color="success"
            type="submit"
          >
            Tìm
          </Button> */}
        </form>
        <Dropdown label={"Thể loại"} inputArray={categoriesName} />
      </div>
      <Grid marginTop={2} container spacing={2}>
        {bookRender?.map((book) => {
          return (
            <Grid item>
              <Book book={book}></Book>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default ProductsPage;
