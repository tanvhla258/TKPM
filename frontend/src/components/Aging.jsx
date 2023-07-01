import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(id, name, begin, incurred, end) {
  return { id, name, begin, incurred, end };
}

export default function Aging({ report }) {
  console.log(report);
  if (!report || report.length == 0) return;
  const rows = report.map((rep, index) =>
    createData(
      index + 1,
      rep.customerName,

      rep.initialDept,
      rep.incurred,
      rep.finalDept
    )
  );
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Khách hàng</TableCell>
            <TableCell align="right">Nợ đầu</TableCell>
            <TableCell align="right">Phát sinh</TableCell>
            <TableCell align="right">Nợ cuối</TableCell>
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
              <TableCell align="right">{row.begin}</TableCell>
              <TableCell align="right">{row.incurred}</TableCell>
              <TableCell align="right">{row.end}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
