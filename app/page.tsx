"use client";

import styles from "./page.module.css";
import ProfileHeader from "./components/ProfileHeader";
import { Container } from "@mui/material";
import TableTitles from "./components/TableTitles";
import UserCards from "./components/UserCards";
import RefreshButton from "./components/RefreshButton";
import UserInformationDialog from "./components/UserInformationDialog";
import { useState } from "react";

export default function Home() {
  const [showUserInformation, setShowUserInformation] = useState(false);

  function handleOpen() {
    setShowUserInformation(true);
  }

  function handleClose() {
    setShowUserInformation(false);
  }

  return (
    <main>
      <ProfileHeader />
      <UserInformationDialog
        showUserInformation={showUserInformation}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <Container>
        <TableTitles />
        <UserCards handleOpen={handleOpen} />
        <RefreshButton />
      </Container>
    </main>
  );
}
