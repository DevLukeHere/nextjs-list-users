"use client";

import styles from "./page.module.css";
import ProfileHeader from "./components/ProfileHeader";
import { Container } from "@mui/material";
import TableTitles from "./components/TableTitles";
import UserCards from "./components/UserCards";

export default function Home() {
  return (
    <main>
      <ProfileHeader />
      <Container>
        <TableTitles />
        <UserCards />
      </Container>
    </main>
  );
}
