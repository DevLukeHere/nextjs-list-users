import Colors from "../../colors/colors";
import styled from "@mui/material/styles/styled";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const NameText = styled("h4")((props) => ({
  fontSize: "2.5rem",
  color: Colors.white,
  fontWeight: "700",
  textTransform: "capitalize",
  marginBottom: "0.5rem",

  [props.theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
  },
}));

export const LastOnlineText = styled("p")((props) => ({
  fontSize: "0.875rem",
  color: Colors.white,
  fontWeight: "400",
  margin: "0",

  [props.theme.breakpoints.down("md")]: {
    fontSize: "0.5rem",
    textAlign: "center",
  },
}));

export const BoxStyled = styled(Box)((props) => ({
  position: "absolute",
  left: "0",
  bottom: "0",
  transform: "translate(0%, 50%)",

  [props.theme.breakpoints.between("md", "lg")]: {
    position: "relative",
  },

  [props.theme.breakpoints.down("md")]: {
    position: "relative",
    transform: "translate(0, 0)",
    paddingTop: "1rem",
  },
}));

export const ContentBox = styled(Box)((props) => ({
  paddingBottom: "1rem",

  [props.theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

export const ContainerStyled = styled(Container)((props) => ({
  backgroundColor: Colors.primary,
  height: "100%",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-around",
  position: "relative",

  [props.theme.breakpoints.between("md", "lg")]: {
    justifyContent: "space-evenly",
  },

  [props.theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },
}));

export const SendMessageButton = styled(Button)((props) => ({
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

  [props.theme.breakpoints.down(377)]: {
    marginBottom: "0.5rem",
    marginRight: "0",
  },
}));

export const AddFriendButton = styled(Button)((props) => ({
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
}));
