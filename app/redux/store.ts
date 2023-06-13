import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./features/dialogSlice";

export const store = configureStore({
  reducer: {
    dialogReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
