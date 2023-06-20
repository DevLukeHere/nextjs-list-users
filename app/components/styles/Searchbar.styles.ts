import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import Colors from "../../colors/colors";
import TextField from "@mui/material/TextField";
import Skeleton from "@mui/material/Skeleton";

export const TextFieldStyled = styled(TextField)({
  marginBottom: "1rem",
  width: "100%",

  ".MuiOutlinedInput-root": {
    borderRadius: "0.75rem",
  },

  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    color: Colors.black,
    borderColor: Colors.primary,
  },
});

export const DividerBottom = styled(Box)({
  width: "100%",
  height: "2rem",
});

export const SkeletonStyled = styled(Skeleton)({
  width: "100%",
  height: "56px",
  borderRadius: "0.75rem",
});
