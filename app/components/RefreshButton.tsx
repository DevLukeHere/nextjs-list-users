"use client";

import { useAppSelector } from "../redux/hooks";
import { styled } from "@mui/material/styles";
import Colors from "../colors/colors";
import Button from "@mui/material/Button";
import RefreshIcon from "@mui/icons-material/Refresh";
import useUsers from "../hooks/useUsers";
import Box from "@mui/material/Box";

const BoxStyled = styled(Box)({
  marginTop: "1rem",
  textAlign: "center",
});

const ButtonStyled = styled(Button)({
  backgroundColor: Colors.primary,
  borderRadius: "0.25rem",
  textTransform: "capitalize",
  ":hover": {
    backgroundColor: Colors.primary,
  },
});

export default function RefreshButton() {
  const page = useAppSelector((state) => state.paginationReducer.page);
  const { mutate, isLoading, isValidating } = useUsers(page, 20);

  function handleRefresh() {
    mutate();
  }

  return (
    <BoxStyled>
      <ButtonStyled
        onClick={handleRefresh}
        disabled={isLoading || isValidating}
        variant="contained"
        startIcon={<RefreshIcon />}
      >
        Refresh
      </ButtonStyled>
    </BoxStyled>
  );
}
