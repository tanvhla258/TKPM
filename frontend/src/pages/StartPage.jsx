import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function StartPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Button onClick={() => navigate("/login")} color="primary">
          BookStore Management
        </Button>
        {/* <Button color="error" startIcon={<DeleteIcon />}>
          Xóa
        </Button> */}
      </Box>
    </div>
  );
}

export default StartPage;
