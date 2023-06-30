import * as React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Collapse,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import styled from "@emotion/styled";
import EditIcon from "@mui/icons-material/Edit";
function createData(id, title, author, quantity) {
  return { id, title, author, quantity };
}

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
function BookEntry({ bookEntry, handleOpenUpdate }) {
  console.log(bookEntry);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // const rows = [
  //   createData(1, "Frozen yoghurt", 6.0, 24),
  //   createData(2, "Ice cream sandwich", 9.0, 37),
  //   createData(3, "Eclair", 16.0, 24),
  // ];
  const rows = bookEntry.deliveryNoteBooks.map((item, index) => {
    return createData(
      index + 1,
      item.book.title,
      item.book.author,
      item.quantity
    );
  });
  console.log("rows:", rows);
  return (
    <div>
      <Card
        sx={{ minWidth: 350 }}
        style={
          expanded
            ? { position: "absolute", zIndex: 10 }
            : { position: "relative" }
        }
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {bookEntry.creationDate}
          </Typography>
          <Typography mt={3} fontWeight={500} variant="h5" component="div">
            Shipper: {bookEntry.shipperName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Số loại sách: {bookEntry.deliveryNoteBooks.length}
          </Typography>
          <Typography
            style={{ position: "absolute", right: "1.1rem", top: "1.1rem" }}
            variant="body2"
            fontWeight={600}
          >
            Tổng lượng sách:{" "}
            {rows.reduce((acc, value) => acc + value.quantity, 0)}
          </Typography>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>STT</TableCell>
                    <TableCell align="left">Tên sách</TableCell>
                    <TableCell align="left">Tác giả</TableCell>
                    <TableCell align="left">Số lượng</TableCell>
                    {/* <TableCell align="left">Đơn giá</TableCell> */}
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
                      <TableCell align="left">{row.title}</TableCell>
                      <TableCell align="left">{row.author}</TableCell>
                      <TableCell align="left">{row.quantity}</TableCell>
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
            onClick={() => handleOpenUpdate()}
            variant="outlined"
            color="success"
            startIcon={<EditIcon />}
          >
            Chỉnh sửa
          </Button>
          <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
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
          expanded ? { display: "block", width: "350px" } : { display: "none" }
        }
      ></div>
    </div>
  );
}

export default BookEntry;
