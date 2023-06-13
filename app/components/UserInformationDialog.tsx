"use client";

import { closeDialog } from "../redux/features/dialogSlice";
import { reset } from "../redux/features/usersSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { styled } from "@mui/material/styles";
import Colors from "../colors/colors";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import dayjs from "dayjs";

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

const BoxStyled = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr auto",
  columnGap: "2rem",
  padding: "0 1.5rem",
});

const TextBlack = styled(Typography)({
  marginBottom: "0.5rem",
  color: Colors.black,
});

const TextGrey = styled(Typography)({
  marginBottom: "0.5rem",
  color: Colors.secondaryGrey,
});

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
      <BoxStyled>
        <Typography sx={{ fontWeight: "700" }} variant="h4">
          {currentUser?.name?.first} {currentUser?.name?.last}
        </Typography>
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </BoxStyled>
      <DialogContent
        sx={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          columnGap: "1rem",
        }}
      >
        <Box>
          <TextGrey variant="body2">Date:</TextGrey>
          <TextGrey variant="body2">Status:</TextGrey>
          <TextGrey variant="body2">Gender:</TextGrey>
          <TextGrey variant="body2">Country:</TextGrey>
          <TextGrey variant="body2">Email:</TextGrey>
        </Box>
        <Box>
          <TextBlack variant="body2">
            {dayjs(currentUser?.dob?.date).format("DD MMM YYYY")}
          </TextBlack>
          <TextBlack variant="body2">Inactive</TextBlack>
          <TextBlack variant="body2">{currentUser?.gender}</TextBlack>
          <TextBlack variant="body2">
            {currentUser?.location?.country}
          </TextBlack>
          <TextBlack variant="body2">{currentUser?.email}</TextBlack>
        </Box>
      </DialogContent>
    </CustomDialog>
  );
}
