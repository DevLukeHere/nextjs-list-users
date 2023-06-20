import styled from "@mui/material/styles/styled";
import Colors from "../../colors/colors";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export const UserNameText = styled(Typography)({
  color: Colors.black,
  fontWeight: "600",
});

export const TextBlack = styled(Typography)({
  color: Colors.black,
  fontWeight: "400",
});

export const TextGrey = styled(Typography)({
  color: Colors.secondaryGrey,
  fontWeight: "400",
});

export const SkeletonStyled = styled(Skeleton)({
  borderRadius: "0.5rem",
  marginBottom: "1rem",
});

export const BoxStyled = styled(Box)({
  padding: "2rem 1.75rem",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  backgroundColor: Colors.white,
  borderRadius: "0.5rem",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  cursor: "pointer",
  justifyItems: "center",
  marginBottom: "1rem",
  border: `2px solid ${Colors.white}`,
  ":hover": {
    borderColor: Colors.primary,
  },
});
