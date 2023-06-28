import React, { useState } from "react";
import Book from "../components/Book";
import { useEffect } from "react";
import { Button, Grid, Modal, Box, Typography, Icon } from "@mui/material";
import Dropdown from "../components/Dropdown";
import { boxstyle } from "../constants/boxstyle";
import AddIcon from "../components/AddIcon";
import SearchIcon from "@mui/icons-material/Search";
import {
  StyledInputBase,
  SearchIconWrapper,
  Search,
} from "../constants/styleComponent.js";

function ProductsPage() {
  const [result, setResult] = useState();
  useEffect(() => {
    const fetchLeague = async () => {
      try {
        const data = await fetch("http://localhost:8080/books/list/all").then(
          (res) => res.json()
        );
        console.log(data);
        setResult([...data]);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchLeague();
  }, []);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Search style={{ width: "50%" }}>
          <SearchIconWrapper>
            <SearchIcon color="primary" />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Dropdown />
      </div>
      <Grid marginTop={2} container spacing={2}>
        <Grid item>
          <Book
            name="Sherlock Homles"
            author={"conan doley"}
            category="detective"
            quantity={50}
          ></Book>
        </Grid>

        <Grid item>
          <Book
            name="Sherlock Homles"
            author={"conan doley"}
            category="detective"
            quantity={50}
          ></Book>
        </Grid>
        <Grid item>
          <Book
            name="Sherlock Homles"
            author={"conan doley"}
            category="detective"
            quantity={50}
          ></Book>
        </Grid>
        <Grid item>
          <Book
            name="Sherlock Homles"
            author={"conan doley"}
            category="detective"
            quantity={50}
          ></Book>
        </Grid>
        <Grid item>
          <Book
            name="Sherlock Homles"
            author={"conan doley"}
            category="detective"
            quantity={50}
          ></Book>
        </Grid>
        <Grid item>
          <Book
            name="Sherlock Homles"
            author={"conan doley"}
            category="detective"
            quantity={50}
          ></Book>
        </Grid>
        <Grid item>
          <Book
            name="Sherlock Homles"
            author={"conan doley"}
            category="detective"
            quantity={50}
          ></Book>
        </Grid>
      </Grid>

      <AddIcon handleOpen={handleOpen} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxstyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ProductsPage;
