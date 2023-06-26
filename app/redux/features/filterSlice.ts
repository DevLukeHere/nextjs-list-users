import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FilterState = {
  name: string,
  users: any,
};

const initialState = {
  name: "",
  users: [],
} as FilterState;

export const filter = createSlice({
  name: "filter",
  initialState,
  reducers: {
    reset: () => initialState,
    setNameFilter: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setUsers: (state, action: PayloadAction<any>) => {
      state.users = action.payload;
    },
  },
});

export const { setNameFilter, reset, setUsers } = filter.actions;

export default filter.reducer;
