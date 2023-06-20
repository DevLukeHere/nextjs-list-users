import Colors from "../../colors/colors";
import styled from "@mui/material/styles/styled";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const NameText = styled("h4")({
  fontSize: "2.5rem",
  color: Colors.white,
  fontWeight: "700",
  textTransform: "capitalize",
  margin: "0",
});

export const LastOnlineText = styled("p")({
  fontSize: "0.875rem",
  color: Colors.white,
  fontWeight: "400",
  margin: "0",
});

export const BoxStyled = styled(Box)((props) => ({
  position: "absolute",
  left: "0",
  bottom: "0",
  transform: "translate(0%, 50%)",
}));

export const ContainerStyled = styled(Container)({
  backgroundColor: Colors.primary,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  position: "relative",
});

export const SendMessageButton = styled(Button)({
  backgroundColor: Colors.white,
  color: Colors.primary,
  textTransform: "capitalize",
  padding: "1rem 1.25rem",
  borderRadius: "0.25rem",
  width: "10.75rem",
  height: "3.25rem",
  marginRight: "0.5rem",
  border: "1px solid transparent",
  ":hover": {
    backgroundColor: Colors.primary,
    borderColor: Colors.white,
    color: Colors.white,
  },
});

export const AddFriendButton = styled(Button)({
  backgroundColor: Colors.primary,
  color: Colors.white,
  textTransform: "capitalize",
  padding: "1rem 1.25rem",
  border: `1px solid ${Colors.white}`,
  borderRadius: "0.25rem",
  width: "10.75rem",
  height: "3.25rem",
  ":hover": {
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    color: Colors.primary,
  },
});
