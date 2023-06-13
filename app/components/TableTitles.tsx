"use client";

import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Colors from "../colors/colors";
import Box from "@mui/material/Box";

const DividerTop = styled(Box)({
  width: "100%",
  height: "7.5rem",
});

const DividerBottom = styled(Box)({
  width: "100%",
  height: "1rem",
});

const BoxStyled = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  justifyItems: "center",
});

const TableTitle = styled(Typography)({
  color: Colors.grey,
});

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
