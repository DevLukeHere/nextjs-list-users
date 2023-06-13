"use client";

import { styled } from "@mui/material/styles";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";

const ContainerStyled = styled(Container)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem 0",
});

const BoxStyled = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  columnGap: "1rem",
});

export default function NavBar() {
  return (
    <nav>
      <ContainerStyled>
        <Image
          src={logo}
          alt="kiratech logo"
          priority
          width="170"
          height="56"
        />
        <BoxStyled>
          <IconButton aria-label="notifications">
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton aria-label="settings">
            <SettingsIcon />
          </IconButton>
          <IconButton aria-label="log out">
            <LogoutIcon />
          </IconButton>
        </BoxStyled>
      </ContainerStyled>
    </nav>
  );
}
