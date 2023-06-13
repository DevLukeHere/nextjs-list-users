"use client";

import { useAppSelector } from "../redux/hooks";
import Colors from "../colors/colors";
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
  const page = useAppSelector((state) => state.paginationReducer.page);
  const { isLoading, isValidating } = useUsers(page, 20);

  return (
    <section
      style={{
        height: "9.75rem",
        backgroundColor: Colors.primary,
        position: "relative",
      }}
    >
      <Box
        style={{
          position: "absolute",
          left: "0",
          bottom: "0",
          transform: "translate(100%, 50%)",
        }}
      >
        <Image src={avatar} alt="avatar" priority width="148" height="148" />
      </Box>
      <Container
        sx={{
          backgroundColor: Colors.primary,
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
              color: Colors.white,
              fontWeight: "700",
              textTransform: "capitalize",
            }}
          >
            john doe
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: Colors.white, fontWeight: "400" }}
          >
            Last online: 2 days ago
          </Typography>
        </Box>
        <Box>
          <Button
            disabled={isValidating || isLoading}
            sx={{
              backgroundColor: Colors.white,
              color: Colors.primary,
              textTransform: "capitalize",
              padding: "1rem 1.25rem",
              borderRadius: "0.25rem",
              width: "10.75rem",
              height: "3.25rem",
              marginRight: "0.5rem",
              border: "1px solid transparent",
              ":hover": {
                backgroundColor: Colors.primary,
                borderColor: Colors.white,
                color: Colors.white,
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
              backgroundColor: Colors.primary,
              color: Colors.white,
              textTransform: "capitalize",
              padding: "1rem 1.25rem",
              border: `1px solid ${Colors.white}`,
              borderRadius: "0.25rem",
              width: "10.75rem",
              height: "3.25rem",
              ":hover": {
                borderColor: Colors.white,
                backgroundColor: Colors.white,
                color: Colors.primary,
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
