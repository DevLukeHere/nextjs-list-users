"use client";

import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

const CustomDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function UserInformationDialog() {
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <CustomDialog
      onClose={handleClose}
      aria-labelledby="user-information-dialog"
      open={open}
    >
      <DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography>Megan R.Johnson</Typography>
        <DialogContent>
          <Box>
            <Typography variant="body2">Date:</Typography>
            <Typography variant="body2">14 Sep 2022</Typography>
          </Box>
          <Box>
            <Typography variant="body2">Status:</Typography>
            <Typography variant="body2">Inactive</Typography>
          </Box>
          <Box>
            <Typography variant="body2">Gender:</Typography>
            <Typography variant="body2">Female</Typography>
          </Box>
          <Box>
            <Typography variant="body2">Country:</Typography>
            <Typography variant="body2">Australia</Typography>
          </Box>
          <Box>
            <Typography variant="body2">Email:</Typography>
            <Typography variant="body2">meganejohnson@gmail.com</Typography>
          </Box>
        </DialogContent>
      </DialogTitle>
    </CustomDialog>
  );
}
