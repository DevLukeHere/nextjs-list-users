import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FilterState = {
  // users: {
  //   cell: string;
  //   dob: {
  //     date: string;
  //     age: number;
  //   };
  //   email: string;
  //   gender: string;
  //   id: {
  //     name: string;
  //     value: string;
  //   };
  //   location: {
  //     city: string;
  //     coordinates: {
  //       latitude: string;
  //       longitude: string;
  //     };
  //     country: string;
  //     postcode: number;
  //     state: string;
  //     street: {
  //       name: string;
  //       number: number;
  //     };
  //     timezone: {
  //       description: string;
  //       offset: string;
  //     };
  //   };
  //   login: {
  //     md5: string;
  //     password: string;
  //     salt: string;
  //     sha1: string;
  //     sha256: string;
  //     username: string;
  //     uuid: string;
  //   };
  //   name: {
  //     first: string;
  //     last: string;
  //     title: string;
  //   };
  //   nat: string;
  //   phone: string;
  //   picture: {
  //     large: string;
  //     medium: string;
  //     thumbnail: string;
  //   };
  //   registered: {
  //     age: number;
  //     date: string;
  //   };
  // },
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
