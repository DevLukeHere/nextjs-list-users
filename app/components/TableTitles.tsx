"use client";

import Typography from "@mui/material/Typography";
import Colors from "../colors/colors";
import Box from "@mui/material/Box";

export default function TableTitles() {
  return (
    <section>
      <Box sx={{ width: "100%", height: "7.5rem" }}></Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          justifyItems: "center",
        }}
      >
        <Typography variant="caption" sx={{ color: Colors.grey }}>
          Date
        </Typography>
        <Typography variant="caption" sx={{ color: Colors.grey }}>
          Name
        </Typography>
        <Typography variant="caption" sx={{ color: Colors.grey }}>
          Gender
        </Typography>
        <Typography variant="caption" sx={{ color: Colors.grey }}>
          Country
        </Typography>
        <Typography variant="caption" sx={{ color: Colors.grey }}>
          Email
        </Typography>
      </Box>
      <Box sx={{ width: "100%", height: "1rem" }}></Box>
    </section>
  );
}
