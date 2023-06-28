import React from "react";
import { Button, Grid, Modal, Box, Typography, Icon } from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useForm } from "react-hook-form";

import { TextField } from "@mui/material";
function AddInvoiceForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // console.log(data.date);
    const newInvoice = {
      bookInvoices: [
        {
          id: {
            bookId: 1,
          },
          quantity: 2,
          unitPrice: 100000,
          book: {
            title: "notebook",
            author: "Phan Huy Truong",
            category: {
              name: "Van hoc",
            },
            id: 1,
          },
        },
      ],
      customer: {
        fullName: "Kim Tien",
        phoneNumber: "123",
        address: "Ho Chi Minh",
        email: "20120210@student.hcmus.edu.vn",
      },
      creationDate: "2023-06-27",
    };
  };
  const [value, setValue] = useState(dayjs(Date.now()));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography alignCenter variant="h6" gutterBottom color="primary">
          Tạo hóa đơn
        </Typography>
        <Grid container spacing={3}>
          <Grid mb={1} item xs={12}>
            <TextField
              {...register("name", { required: true })}
              required
              id="name"
              name="name"
              label="Tên khách hàng "
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          {/* <Grid mb={1} item xs={12}>
            <TextField
              {...register("author", { required: true })}
              required
              id="author"
              name="author"
              label="Tác giả"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid> */}
          <Grid mb={1} item xs={12}>
            <TextField
              required
              {...register("cost", { required: true })}
              id="cost"
              name="cost"
              label="Giá tiền"
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
                  setValue((value) => newValue);
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

export default AddInvoiceForm;