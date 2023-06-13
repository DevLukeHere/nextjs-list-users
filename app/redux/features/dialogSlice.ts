import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DialogState = {
  open: boolean;
};

const initialState = {
  open: false,
} as DialogState;

export const dialog = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    reset: () => initialState,
    openDialog: (state) => {
      state.open = true;
    },
    closeDialog: (state) => {
      state.open = false;
    },
  },
});

export const { openDialog, closeDialog, reset } = dialog.actions;

export default dialog.reducer;
