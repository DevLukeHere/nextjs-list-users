import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PaginationState = {
  page: number;
};

const initialState = {
  page: 1,
} as PaginationState;

export const pagination = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    reset: () => initialState,
    toNextPage: (state) => {
      state.page += 1;
    },
    toPreviousPage: (state) => {
      state.page -= 1;
    },
  },
});

export const { toNextPage, toPreviousPage, reset } = pagination.actions;

export default pagination.reducer;
