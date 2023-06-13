"use client";

import Image from "next/image";
import logo from "../../public/images/logo.png";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";

export default function NavBar() {
  return (
    <nav>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 0",
        }}
      >
        <Image src={logo} alt="kiratech logo" width="170" height="56" />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            columnGap: "1rem",
          }}
        >
          <IconButton aria-label="notifications">
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton aria-label="settings">
            <SettingsIcon />
          </IconButton>
          <IconButton aria-label="log out">
            <LogoutIcon />
          </IconButton>
        </Box>
      </Container>
    </nav>
  );
}
