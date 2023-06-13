"use client";

import Button from "@mui/material/Button";
import RefreshIcon from "@mui/icons-material/Refresh";
import Box from "@mui/material/Box";

export default function RefreshButton() {
  return (
    <Box sx={{ marginTop: "1rem", textAlign: "center" }}>
      <Button
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
