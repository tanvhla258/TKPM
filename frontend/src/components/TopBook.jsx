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

const rows = [
  createData("1", "Người trong làng", "Làng", 24),
  createData("2", "Đi qua mùa hạ", "Nguyễn Nhật Ánh", 24),
  createData("3", "Người trong làng", "Làng", 24),
  createData("4", "Người trong làng", "Làng", 24),
  createData("5", "Người trong làng", "Làng", 24),
];

export default function TopBook() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Số lượng</TableCell>
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
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.author}</TableCell>
              <TableCell align="right">{row.sell}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
