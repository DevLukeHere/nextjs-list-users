"use client";

import { closeDialog } from "../redux/features/dialogSlice";
import { reset } from "../redux/features/usersSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

const CustomDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    //
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    borderRadius: "0.5rem",
    padding: "1.5rem",
  },
}));

export default function UserInformationDialog() {
  const open = useAppSelector((state) => state.dialogReducer.open);
  const currentUser = useAppSelector((state) => state.usersReducer.currentUser);
  const dispatch = useAppDispatch();

  function handleClose() {
    dispatch(closeDialog());
    dispatch(reset());
  }

  return (
    <CustomDialog
      onClose={handleClose}
      aria-labelledby="user-information-dialog"
      open={open}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          columnGap: "2rem",
          padding: "0 1.5rem",
        }}
      >
        <Typography sx={{ fontWeight: "700" }} variant="h4">
          {currentUser?.name?.first} {currentUser?.name?.last}
        </Typography>
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent
        sx={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          columnGap: "1rem",
        }}
      >
        <Box>
          <Typography
            sx={{ marginBottom: "0.5rem", color: "#979797" }}
            variant="body2"
          >
            Date:
          </Typography>
          <Typography
            sx={{ marginBottom: "0.5rem", color: "#979797" }}
            variant="body2"
          >
            Status:
          </Typography>
          <Typography
            sx={{ marginBottom: "0.5rem", color: "#979797" }}
            variant="body2"
          >
            Gender:
          </Typography>
          <Typography
            sx={{ marginBottom: "0.5rem", color: "#979797" }}
            variant="body2"
          >
            Country:
          </Typography>
          <Typography sx={{ color: "#979797" }} variant="body2">
            Email:
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{ marginBottom: "0.5rem", color: "#303030" }}
            variant="body2"
          >
            {currentUser?.dob?.date}
          </Typography>
          <Typography
            sx={{ marginBottom: "0.5rem", color: "#303030" }}
            variant="body2"
          >
            Inactive
          </Typography>
          <Typography
            sx={{ marginBottom: "0.5rem", color: "#303030" }}
            variant="body2"
          >
            {currentUser?.gender}
          </Typography>
          <Typography
            sx={{ marginBottom: "0.5rem", color: "#303030" }}
            variant="body2"
          >
            {currentUser?.location?.country}
          </Typography>
          <Typography sx={{ color: "#303030" }} variant="body2">
            {currentUser?.email}
          </Typography>
        </Box>
      </DialogContent>
    </CustomDialog>
  );
}
