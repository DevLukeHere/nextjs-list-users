import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UsersState = {
  users: unknown;
  // users: {
  //   cell: string,
  //   dob: {
  //     date: string,
  //     age: number,
  //   },
  //   email: string,
  //   gender: string,
  //   id: {
  //     name: string,
  //     value: string,
  //   },
  //   location: {
  //     city: string,
  //     coordinates: {
  //       latitude: string,
  //       longitude: string,
  //     },
  //     country: string,
  //     postcode: number,
  //     state: string,
  //     street: {
  //       name: string,
  //       number: number,
  //     },
  //     timezone: {
  //       description: string,
  //       offset: string,
  //     }
  //   },
  //   login: {
  //     md5: string,
  //     password: string,
  //     salt: string,
  //     sha1: string,
  //     sha256: string,
  //     username: string,
  //     uuid: string,
  //   },
  //   name: {
  //     first: string,
  //     last: string,
  //     title: string,
  //   },
  //   nat: string,
  //   phone: string,
  //   picture: {
  //     large: string,
  //     medium: string,
  //     thumbnail: string,
  //   },
  //   registered: {
  //     age: number,
  //     date: string,
  //   }
  // };
};

const initialState = {
  users: [],
} as UsersState;

export const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: () => initialState,
    fetchUsers: (state, action: PayloadAction<unknown>) => {
      state.users = action.payload;
    },
  },
});

export const { fetchUsers, reset } = users.actions;

export default users.reducer;
