import React from "react";
import User from "../components/User";
import { Grid, Typography, Modal, Box } from "@mui/material";
import { boxstyle } from "../constants/boxstyle";
import AddIcon from "../components/AddIcon";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../reducers/userReducer";
import { useEffect } from "react";

function UserPage() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(userActions.fetchAllUser());
  }, [dispatch]);

  return (
    <div style={{ position: "relative" }}>
      <Grid marginTop={2} container spacing={2}>
        {users?.length == 0 && (
          <Typography
            fontWeight={600}
            sx={{ ml: 5.5 }}
            variant="h5"
            component="div"
          >
            Hiện tại chưa có người dùng trong hệ thống
          </Typography>
        )}
        {users?.map((user) => {
          return (
            <Grid item>
              <User
                key={user.id}
                name={user.fullName}
                address={user.address}
                phone={user.phoneNumber}
                email={user.email}
              ></User>
            </Grid>
          );
        })}
      </Grid>

      {/* <AddIcon handleOpen={handleOpen} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxstyle}>
          <AddUserForm></AddUserForm>
        </Box>
      </Modal> */}
    </div>
  );
}

export default UserPage;
