"use client";

import { toNextPage, toPreviousPage } from "../redux/features/paginationSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import useUsers from "../hooks/useUsers";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const BoxStyled = styled(Box)({
  marginTop: "1rem",
  textAlign: "end",
});

const PageNumber = styled(Typography)({
  margin: "0 1rem",
});

export default function Pagination() {
  const page = useAppSelector((state) => state.paginationReducer.page);
  const dispatch = useAppDispatch();
  const { isLoading, isValidating } = useUsers(page, 20);

  function handlePrevious() {
    dispatch(toPreviousPage());
  }

  function handleNext() {
    dispatch(toNextPage());
  }

  return (
    <BoxStyled>
      <IconButton
        disabled={isLoading || isValidating || page === 1}
        onClick={() => handlePrevious()}
      >
        <ChevronLeftIcon />
      </IconButton>
      <PageNumber variant="caption">{page}</PageNumber>
      <IconButton
        disabled={isLoading || isValidating}
        onClick={() => handleNext()}
      >
        <ChevronRightIcon />
      </IconButton>
    </BoxStyled>
  );
}
