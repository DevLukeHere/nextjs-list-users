"use client";

import styles from "./page.module.css";
import ProfileHeader from "./components/ProfileHeader";
import { Container } from "@mui/material";
import TableTitles from "./components/TableTitles";
import UserCards from "./components/UserCards";
import RefreshButton from "./components/RefreshButton";

export default function Home() {
  return (
    <main>
      <ProfileHeader />
      <Container>
        <TableTitles />
        <UserCards />
        <RefreshButton />
      </Container>
    </main>
  );
}
