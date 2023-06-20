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
        <TableTitle variant="caption">Date</TableTitle>
        <TableTitle variant="caption">Name</TableTitle>
        <TableTitle variant="caption">Gender</TableTitle>
        <TableTitle variant="caption">Country</TableTitle>
        <TableTitle variant="caption">Email</TableTitle>
      </BoxStyled>
      <DividerBottom></DividerBottom>
    </section>
  );
}
