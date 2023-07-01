import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function Flash({ message, type, onOpen = false }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={true}
        autoHideDuration={2000}
        onClose={handleClose}
        message={message}
        action={action}
      />
    </div>
  );
}
