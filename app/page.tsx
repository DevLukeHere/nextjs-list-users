"use client";

import ProfileHeader from "./components/ProfileHeader";
import Container from "@mui/material/Container";
import TableTitles from "./components/TableTitles";
import UserCards from "./components/UserCards";
import RefreshButton from "./components/RefreshButton";
import UserInformationDialog from "./components/UserInformationDialog";
import Pagination from "./components/Pagination";

export default function Home() {
  return (
    <main>
      <ProfileHeader />
      <Container>
        <UserInformationDialog />
        <TableTitles />
        <UserCards />
        <Pagination />
        <RefreshButton />
      </Container>
    </main>
  );
}
