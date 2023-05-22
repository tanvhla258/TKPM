import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import SettingsIcon from "@mui/icons-material/Settings";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const drawerWidth = 240;
const Icons = [<HomeIcon />, <StoreIcon />, <ReceiptIcon />, <SettingsIcon />];
const drawer = (
  <div>
    <Typography
      variant="h5"
      style={{
        fontWeight: 700,
        color: "#111",
        textAlign: "center",
        marginTop: "30px",
        marginBottom: "30px",
      }}
      className="gradientText"
      noWrap
      component="div"
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Book Store Manager
    </Typography>
    <List>
      {["Dashboard", "Products", "Orders", "Settings"].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton component={Link} to={`/${text.toLowerCase()}`}>
            <ListItemIcon>{Icons[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </div>
);
function Sidebar() {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="temporary"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Sidebar;
