"use client";

import { toNextPage, toPreviousPage } from "../redux/features/paginationSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { BoxStyled, PageNumber } from "./styles/Pagination.styles";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import useUsers from "../hooks/useUsers";

export default function Pagination() {
  const page = useAppSelector((state) => state.paginationReducer.page);
  const dispatch = useAppDispatch();
  const { isLoading, isValidating } = useUsers(page, 7);

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
      <PageNumber>{page}</PageNumber>
      <IconButton
        disabled={isLoading || isValidating}
        onClick={() => handleNext()}
      >
        <ChevronRightIcon />
      </IconButton>
    </BoxStyled>
  );
}
