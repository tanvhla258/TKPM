import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(id, name, author, sell) {
  return { id, name, author, sell };
}

export default function TopBook({ invoices }) {
  console.log(invoices);
  const TopSellBook = [];

  invoices?.content?.forEach((invoice) => {
    invoice?.bookInvoices?.forEach((bookInvoice) => {
      const { book, quantity } = bookInvoice;

      const existingBook = TopSellBook.find((b) => b.id === book.id);

      if (existingBook) {
        // Book already exists, update the quantity
        existingBook.quantity += quantity;
      } else {
        // Add a new entry to the array
        TopSellBook.push({ ...book, quantity });
      }
    });
  });

  console.log(TopSellBook);
  const rows = TopSellBook?.sort((a, b) => b.quantity - a.quantity).map(
    (book, index) =>
      createData(index + 1, book.title, book.author, book.quantity)
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="left">Tên sách</TableCell>
            <TableCell align="left">Tác giả</TableCell>
            <TableCell align="center">Số lượng</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.author}</TableCell>
              <TableCell align="center">{row.sell}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
