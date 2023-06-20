import styled from "@mui/material/styles/styled";
import Colors from "../../colors/colors";
import Box from "@mui/material/Box";

export const DividerTop = styled(Box)((props) => ({
  width: "100%",
  height: "6.5rem",

  [props.theme.breakpoints.down("md")]: {
    height: "4rem",
  },
}));

export const DividerBottom = styled(Box)({
  width: "100%",
  height: "1rem",
});

export const BoxStyled = styled(Box)((props) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  justifyItems: "center",

  [props.theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
  },
}));

export const TableTitle = styled("p")({
  fontSize: "0.75rem",
  color: Colors.primaryGrey,
  margin: "0",
});
