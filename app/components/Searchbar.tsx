"use client";

import {
  DividerBottom,
  TextFieldStyled,
  SkeletonStyled,
} from "./styles/Searchbar.styles";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setNameFilter, reset } from "../redux/features/filterSlice";
import useUsers from "../hooks/useUsers";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import ClearIcon from "@mui/icons-material/Clear";

type event = any;

export default function Searchbar() {
  const name = useAppSelector((state) => state.filterReducer.name);
  const page = useAppSelector((state) => state.paginationReducer.page);
  const { users, isLoading, isValidating } = useUsers(page, 7);
  const dispatch = useAppDispatch();

  function handleClear() {
    dispatch(reset());
  }

  function handleChange(event: event) {
    const name = event.target.value;

    dispatch(setNameFilter(name));

    // TODO: fix error from TypeScript
    // @ts-ignore
    users.filter((user) =>
      user.name.first.toLowerCase().includes(name.toLowerCase())
    );
  }

  return (
    <section>
      {isLoading || isValidating ? (
        <SkeletonStyled variant="rectangular" height={56} />
      ) : (
        <TextFieldStyled
          id="searchbar"
          variant="outlined"
          label="search by name"
          value={name}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClear}>
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
      <DividerBottom></DividerBottom>
    </section>
  );
}
