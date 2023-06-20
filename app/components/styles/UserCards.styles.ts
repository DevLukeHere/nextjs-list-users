import styled from "@mui/material/styles/styled";
import Colors from "../../colors/colors";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export const UserNameText = styled("p")({
  fontSize: "0.875rem",
  color: Colors.black,
  fontWeight: "600",
  margin: "0",
});

export const TextBlack = styled("p")({
  fontSize: "0.875rem",
  color: Colors.black,
  fontWeight: "400",
  margin: "0",
});

export const TextGrey = styled("p")({
  fontSize: "0.875rem",
  color: Colors.secondaryGrey,
  fontWeight: "400",
  margin: "0",
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
