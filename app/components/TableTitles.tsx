"use client";

import {
  DividerTop,
  DividerBottom,
  BoxStyled,
  TableTitle,
} from "./styles/TableTitles.styles";
import Searchbar from "./Searchbar";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function TableTitles() {
  const matches = useMediaQuery("(min-width: 900px)");

  return (
    <section>
      <DividerTop></DividerTop>
      <Searchbar />
      <BoxStyled>
        <TableTitle>Date</TableTitle>
        <TableTitle>Name</TableTitle>
        <TableTitle>Gender</TableTitle>
        <TableTitle>Country</TableTitle>
        {matches ? <TableTitle>Email</TableTitle> : null}
      </BoxStyled>
      <DividerBottom></DividerBottom>
    </section>
  );
}
