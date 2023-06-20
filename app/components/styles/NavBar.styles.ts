import styled from "@mui/material/styles/styled";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const ContainerStyled = styled(Container)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem 1rem",
});

export const BoxStyled = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  columnGap: "1rem",
});
