"use client";

import Image from "next/image";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
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
        <Typography variant="caption" sx={{ color: "#bcbcbc" }}>
          Date
        </Typography>
        <Typography variant="caption" sx={{ color: "#bcbcbc" }}>
          Name
        </Typography>
        <Typography variant="caption" sx={{ color: "#bcbcbc" }}>
          Gender
        </Typography>
        <Typography variant="caption" sx={{ color: "#bcbcbc" }}>
          Country
        </Typography>
        <Typography variant="caption" sx={{ color: "#bcbcbc" }}>
          Email
        </Typography>
      </Box>
      <Box sx={{ width: "100%", height: "1rem" }}></Box>
    </section>
  );
}
