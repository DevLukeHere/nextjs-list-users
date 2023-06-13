"use client";

import {
  toNextPage,
  toPreviousPage,
  reset,
} from "../redux/features/paginationSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import useUsers from "../hooks/useUsers";
import Box from "@mui/material/Box";

export default function Pagination() {
  const page = useAppSelector((state) => state.paginationReducer.page);
  const dispatch = useAppDispatch();
  const { isLoading, isValidating } = useUsers(page, 20);

  console.log("page:", page)

  function handlePrevious() {
    dispatch(toPreviousPage());
  }

  function handleNext() {
    dispatch(toNextPage());
  }

  return (
    <Box sx={{ marginTop: "1rem", textAlign: "end" }}>
      <IconButton
        disabled={isLoading || isValidating}
        sx={{ marginRight: "1rem" }}
        onClick={() => handlePrevious()}
      >
        <ChevronLeftIcon />
      </IconButton>
      <IconButton
        disabled={isLoading || isValidating}
        onClick={() => handleNext()}
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
}
