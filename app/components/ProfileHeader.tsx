"use client";

import Image from "next/image";
import useUsers from "../hooks/useUsers";
import avatar from "../../public/images/avatar.png";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";

export default function ProfileHeader() {
  const { isLoading, isValidating } = useUsers(7);

  return (
    <section
      style={{
        height: "9.75rem",
        backgroundColor: "#35bad8",
        position: "relative",
      }}
    >
      <Box
        style={{
          position: "absolute",
          left: "0",
          bottom: "0",
          transform: "translate(50%, 50%)",
        }}
      >
        <Image src={avatar} alt="avatar" priority width="148" height="148" />
      </Box>
      <Container
        sx={{
          backgroundColor: "#35bad8",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: "#ffffff",
              fontWeight: "700",
              textTransform: "capitalize",
            }}
          >
            john doe
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#ffffff", fontWeight: "400" }}
          >
            Last online: 2 days ago
          </Typography>
        </Box>
        <Box>
          <Button
            disabled={isValidating || isLoading}
            sx={{
              backgroundColor: "#ffffff",
              color: "#35bad8",
              textTransform: "capitalize",
              padding: "1rem 1.25rem",
              borderRadius: "0.25rem",
              width: "10.75rem",
              height: "3.25rem",
              marginRight: "0.5rem",
              border: "1px solid transparent",
              ":hover": {
                backgroundColor: "#35bad8",
                borderColor: "#ffffff",
                color: "#ffffff",
              },
            }}
            variant="contained"
            startIcon={<SendIcon />}
          >
            Send Message
          </Button>
          <Button
            disabled={isValidating || isLoading}
            sx={{
              backgroundColor: "#35bad8",
              color: "#ffffff",
              textTransform: "capitalize",
              padding: "1rem 1.25rem",
              border: "1px solid #ffffff",
              borderRadius: "0.25rem",
              width: "10.75rem",
              height: "3.25rem",
              ":hover": {
                borderColor: "#ffffff",
                backgroundColor: "#ffffff",
                color: "#35bad8",
              },
            }}
            variant="outlined"
            startIcon={<AddIcon />}
          >
            Add Friend
          </Button>
        </Box>
      </Container>
    </section>
  );
}
