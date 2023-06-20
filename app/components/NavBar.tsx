"use client";

import Image from "next/image";
import logo from "../../public/images/logo.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import { ContainerStyled, BoxStyled } from "./styles/NavBar.styles";

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
