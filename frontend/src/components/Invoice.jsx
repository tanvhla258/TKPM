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
import PaidIcon from "@mui/icons-material/Paid";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, "Frozen yoghurt", 6.0, 24, 4.0),
  createData(2, "Ice cream sandwich", 9.0, 37, 4.3),
  createData(3, "Eclair", 16.0, 24, 6.0),
];
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
function Invoice({ date, user, id, cost }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
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
            {date}
          </Typography>
          <Typography fontWeight={600} variant="h5" component="div">
            {user.name}
          </Typography>

          <Typography
            style={{ position: "absolute", right: "1.1rem", top: "1.1rem" }}
            variant="body2"
            fontWeight={600}
          >
            Thành tiền: {0}d
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
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.calories}</TableCell>
                      <TableCell align="left">{row.fat}</TableCell>
                      <TableCell align="left">{row.carbs}</TableCell>
                      <TableCell align="left">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Collapse>
        </CardContent>

        <CardActions>
          {/* <Button size="small">Learn More</Button> */}

          <Button variant="outlined" color="success" startIcon={<PaidIcon />}>
            Thanh toan
          </Button>
          <Button
            variant="outlined"
            color="error"
            startIcon={<DriveFileRenameOutlineIcon />}
          >
            Ghi no
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
