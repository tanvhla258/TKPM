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
import Swal from "sweetalert2";
function ProductsPage() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);
  const categories = useSelector((state) => state.book.categories);
  const [searchInfo, setSearchInfo] = useState([]);
  const [dropDownData, setDropDownData] = useState();
  useEffect(() => {
    dispatch(bookActions.fetchAllBooks());
    dispatch(bookActions.fetchAllCategories());
  }, [dispatch]);
  const bookRender = searchInfo.content ? searchInfo.content : books;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (!books) return;
    console.log(data);

    try {
      if (data.search != "")
        axios
          .get(
            `http://localhost:8080/books/search?title=${data.search}&category=${data.category}&page=0&size=10`
          )
          .then((respone) => {
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
      else {
        axios
          .get(`http://localhost:8080/books/search?&page=0&size=10`)
          .then((respone) => {
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
      }
    } catch (e) {}
  };

  return (
    <div>
      <div style={{ display: "flex", gap: 20 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            // style={{ width: "50%" }}
            {...register("search", { required: false })}
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
        </form>
        <Dropdown
          register={register}
          label={"Thể loại"}
          inputArray={categories}
        />
      </div>
      <Grid marginTop={2} container spacing={2}>
        {books?.length == 0 && (
          <Typography
            fontWeight={600}
            sx={{ ml: 5.5 }}
            variant="h5"
            component="div"
          >
            Hiện tại chưa có sách trong hệ thống
          </Typography>
        )}
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
