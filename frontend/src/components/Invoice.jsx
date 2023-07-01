import * as React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import CardActions from "@mui/material/CardActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import Swal from "sweetalert2";
function createData(id, bookName, author, quantity, unitPrice) {
  return { id, bookName, author, quantity, unitPrice };
}

// import CardHeader from "@mui/material/CardHeader";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
function Invoice({ invoice, handleOpenUpdate }) {
  const [expanded, setExpanded] = React.useState(false);
  console.log("invoice:", invoice);
  const rows = invoice.bookInvoices.map((item, index) => {
    return createData(
      index + 1,
      item.book.title,
      item.book.author,
      item.quantity,
      item.unitPrice
    );
  });
  const totalCost = invoice.bookInvoices.reduce(
    (acc, item) => acc + item.quantity * item.unitPrice,
    0
  );
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const onRemove = (invoice) => {
    try {
      axios
        .post(`http://localhost:8080/invoices/remvove${invoice.id}`, invoice)
        .then((respone) => {
          console.log(respone.data);
          Swal.fire("Xoá thành công", "OK").then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/invoices";
              // () => handleClose(true);
            }
          });
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Card
        in={expanded}
        sx={{ minWidth: 450 }}
        style={expanded ? { position: "absolute", zIndex: 10 } : {}}
      >
        <CardContent style={{ position: "relative" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {new Date().toISOString().substring(0, 10)}
          </Typography>
          <Typography fontWeight={600} variant="h5" component="div">
            {invoice.customer.fullName}
          </Typography>

          <Typography
            style={{ position: "absolute", right: "1.1rem", top: "1.1rem" }}
            variant="body2"
            fontWeight={600}
          >
            Thành tiền: {totalCost}đ
          </Typography>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>STT</TableCell>
                    <TableCell align="left">Tên sách</TableCell>
                    <TableCell align="left">Thể loại</TableCell>
                    <TableCell align="left">Số lượng</TableCell>
                    <TableCell align="left">Đơn giá</TableCell>
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
                      <TableCell align="left">{row.bookName}</TableCell>
                      <TableCell align="left">{row.author}</TableCell>
                      <TableCell align="left">{row.quantity}</TableCell>
                      <TableCell align="left">{row.unitPrice}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Collapse>
        </CardContent>

        <CardActions>
          {/* <Button size="small">Learn More</Button> */}

          <Button
            onClick={() => handleOpenUpdate(invoice)}
            variant="outlined"
            color="success"
            startIcon={<EditIcon />}
          >
            Chỉnh sửa
          </Button>
          <Button
            onClick={() => onRemove(invoice)}
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
          >
            Xóa
          </Button>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      </Card>
      <div
        style={
          expanded ? { display: "block", width: "450px" } : { display: "none" }
        }
      ></div>
    </>
  );
}

export default Invoice;
