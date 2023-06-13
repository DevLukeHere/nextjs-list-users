"use client";

import { useAppSelector } from "../redux/hooks";
import Colors from "../colors/colors";
import Button from "@mui/material/Button";
import RefreshIcon from "@mui/icons-material/Refresh";
import useUsers from "../hooks/useUsers";
import Box from "@mui/material/Box";

export default function RefreshButton() {
  const page = useAppSelector((state) => state.paginationReducer.page);
  const { mutate, isLoading, isValidating } = useUsers(page, 20);

  function handleRefresh() {
    mutate();
  }

  return (
    <Box sx={{ marginTop: "1rem", textAlign: "center" }}>
      <Button
        onClick={handleRefresh}
        disabled={isLoading || isValidating}
        variant="contained"
        startIcon={<RefreshIcon />}
        sx={{
          backgroundColor: Colors.primary,
          borderRadius: "0.25rem",
          textTransform: "capitalize",
          ":hover": {
            backgroundColor: Colors.primary,
          },
        }}
      >
        Refresh
      </Button>
    </Box>
  );
}
