"use client";

import {
  DividerTop,
  DividerBottom,
  BoxStyled,
  TableTitle,
} from "./styles/TableTitles.styles";

export default function TableTitles() {
  return (
    <section>
      <DividerTop></DividerTop>
      <BoxStyled>
        <TableTitle>Date</TableTitle>
        <TableTitle>Name</TableTitle>
        <TableTitle>Gender</TableTitle>
        <TableTitle>Country</TableTitle>
        <TableTitle>Email</TableTitle>
      </BoxStyled>
      <DividerBottom></DividerBottom>
    </section>
  );
}
