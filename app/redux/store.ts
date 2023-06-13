import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./features/dialogSlice";
import usersReducer from "./features/usersSlice";
import paginationReducer from "./features/paginationSlice";

export const store = configureStore({
  reducer: {
    dialogReducer,
    usersReducer,
    paginationReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
