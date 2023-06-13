"use client";

import styles from "./page.module.css";
import ProfileHeader from "./components/ProfileHeader";
import { Container } from "@mui/material";
import TableTitles from "./components/TableTitles";

export default function Home() {
  return (
    <main>
      <ProfileHeader />
      <Container>
        <TableTitles />
      </Container>
    </main>
  );
}
