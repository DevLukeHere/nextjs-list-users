import styled from "@mui/material/styles/styled";
import Colors from "../../colors/colors";
import Box from "@mui/material/Box";

export const DividerTop = styled(Box)({
  width: "100%",
  height: "7.5rem",
});

export const DividerBottom = styled(Box)({
  width: "100%",
  height: "1rem",
});

export const BoxStyled = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  justifyItems: "center",
});

export const TableTitle = styled("p")({
  fontSize: "0.75rem",
  color: Colors.primaryGrey,
  margin: "0",
});
