import styled from "@mui/material/styles/styled";
import Colors from "../../colors/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const BoxStyled = styled(Box)({
  marginTop: "1rem",
  textAlign: "center",
});

export const ButtonStyled = styled(Button)({
  backgroundColor: Colors.primary,
  borderRadius: "0.25rem",
  textTransform: "capitalize",
  ":hover": {
    backgroundColor: Colors.primary,
  },
});
