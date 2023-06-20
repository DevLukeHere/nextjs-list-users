"use client";

import { ContainerStyled, BoxStyled } from "./styles/NavBar.styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";

export default function NavBar() {
  const matches = useMediaQuery("(min-width: 900px)");

  return (
    <nav>
      <ContainerStyled>
        <Image
          src={logo}
          alt="kiratech logo"
          priority
          width={matches ? 170 : 126}
          height={matches ? 56 : 46}
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
