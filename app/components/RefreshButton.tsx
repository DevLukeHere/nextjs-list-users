"use client";

import Button from "@mui/material/Button";
import RefreshIcon from "@mui/icons-material/Refresh";
import useUsers from "../hooks/useUsers";
import Box from "@mui/material/Box";

export default function RefreshButton() {
  const { mutate, isLoading, isValidating } = useUsers(7);

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
          backgroundColor: "#35bad8",
          borderRadius: "0.25rem",
          textTransform: "capitalize",
          ":hover": {
            backgroundColor: "#35bad8",
          },
        }}
      >
        Refresh
      </Button>
    </Box>
  );
}
