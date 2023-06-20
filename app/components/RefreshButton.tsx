"use client";

import { useAppSelector } from "../redux/hooks";
import { BoxStyled, ButtonStyled } from "./styles/RefreshButton.styles";
import RefreshIcon from "@mui/icons-material/Refresh";
import useUsers from "../hooks/useUsers";

export default function RefreshButton() {
  const page = useAppSelector((state) => state.paginationReducer.page);
  const { mutate, isLoading, isValidating } = useUsers(page, 7);

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
