"use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function UserCards() {
  return (
    <section>
      <Box
        sx={{
          padding: "2rem 1.75rem",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
          borderRadius: "0.5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          cursor: "pointer",
          justifyItems: "center"
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "#979797", fontWeight: "400" }}
        >
          14 Sep 2022
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#303030", fontWeight: "600" }}
        >
          Megan R.Johnson
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#979797", fontWeight: "400" }}
        >
          Female
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#303030", fontWeight: "400" }}
        >
          Australia
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#979797", fontWeight: "400" }}
        >
          meganejohnson@gmail.com
        </Typography>
      </Box>
    </section>
  );
}
