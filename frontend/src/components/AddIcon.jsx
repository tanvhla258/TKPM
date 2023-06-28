import React from "react";
import { Icon } from "@mui/material";

function AddIcon({ handleOpen }) {
  return (
    <Icon
      style={{
        position: "fixed",
        zIndex: "10",
        cursor: "pointer",
        bottom: 15,
        right: 15,
      }}
      onClick={handleOpen}
      color="primary"
      fontSize="large"
    >
      add_circle
    </Icon>
  );
}

export default AddIcon;
