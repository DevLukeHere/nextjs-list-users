"use client";

import { closeDialog } from "../redux/features/dialogSlice";
import { reset } from "../redux/features/usersSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  CustomDialog,
  BoxStyled,
  TextBlack,
  TextGrey,
  NameText,
  DialogContentStyled,
} from "./styles/UserInformationDialog.styles";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import dayjs from "dayjs";

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
        <NameText>
          {currentUser?.name?.first} {currentUser?.name?.last}
        </NameText>
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </BoxStyled>
      <DialogContentStyled>
        <Box>
          <TextGrey>Date:</TextGrey>
          <TextGrey>Status:</TextGrey>
          <TextGrey>Gender:</TextGrey>
          <TextGrey>Country:</TextGrey>
          <TextGrey>Email:</TextGrey>
        </Box>
        <Box>
          <TextBlack>
            {dayjs(currentUser?.dob?.date).format("DD MMM YYYY")}
          </TextBlack>
          <TextBlack>Inactive</TextBlack>
          <TextBlack>{currentUser?.gender}</TextBlack>
          <TextBlack>{currentUser?.location?.country}</TextBlack>
          <TextBlack>{currentUser?.email}</TextBlack>
        </Box>
      </DialogContentStyled>
    </CustomDialog>
  );
}
