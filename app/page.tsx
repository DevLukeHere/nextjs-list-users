"use client";

import styles from "./page.module.css";
import ProfileHeader from "./components/ProfileHeader";
import { Container } from "@mui/material";
import TableTitles from "./components/TableTitles";
import UserCards from "./components/UserCards";
import RefreshButton from "./components/RefreshButton";
import UserInformationDialog from "./components/UserInformationDialog";

export default function Home() {
  return (
    <main>
      <ProfileHeader />
      <UserInformationDialog />
      <Container>
        <TableTitles />
        <UserCards />
        <RefreshButton />
      </Container>
    </main>
  );
}
