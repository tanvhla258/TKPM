import React from "react";
import { Icon } from "@mui/material";

function AddIcon({ handleOpen }) {
  return (
    <Icon
      style={{
        position: "sticky",
        // zIndex: "10",
        cursor: "pointer",
        bottom: "20px",
        marginLeft: "90vw",
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
