"use client";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import ClearIcon from "@mui/icons-material/Clear";
import { DividerBottom, TextFieldStyled } from "./styles/Searchbar.styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Searchbar() {
  const matches = useMediaQuery("(min-width: 900px)");

  function handleClear() {
    //
  }

  return (
    <section>
      <TextFieldStyled
        id="searchbar"
        variant="outlined"
        label="search by name"
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
      <DividerBottom></DividerBottom>
    </section>
  );
}
