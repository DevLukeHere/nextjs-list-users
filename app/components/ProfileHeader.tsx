"use client";

import { useAppSelector } from "../redux/hooks";
import { styled } from "@mui/material/styles";
import Colors from "../colors/colors";
import Image from "next/image";
import useUsers from "../hooks/useUsers";
import avatar from "../../public/images/avatar.png";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";

const NameText = styled(Typography)({
  color: Colors.white,
  fontWeight: "700",
  textTransform: "capitalize",
});

const LastOnlineText = styled(Typography)({
  color: Colors.white,
  fontWeight: "400",
});

const BoxStyled = styled(Box)({
  position: "absolute",
  left: "0",
  bottom: "0",
  transform: "translate(100%, 50%)",
});

const ContainerStyled = styled(Container)({
  backgroundColor: Colors.primary,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
});

const SendMessageButton = styled(Button)({
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

const AddFriendButton = styled(Button)({
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

export default function ProfileHeader() {
  const page = useAppSelector((state) => state.paginationReducer.page);
  const { isLoading, isValidating } = useUsers(page, 20);

  return (
    <section
      style={{
        height: "9.75rem",
        backgroundColor: Colors.primary,
        position: "relative",
      }}
    >
      <BoxStyled>
        <Image src={avatar} alt="avatar" priority width="148" height="148" />
      </BoxStyled>
      <ContainerStyled>
        <Box>
          <NameText variant="h4">john doe</NameText>
          <LastOnlineText variant="body2">
            Last online: 2 days ago
          </LastOnlineText>
        </Box>
        <Box>
          <SendMessageButton
            disabled={isValidating || isLoading}
            variant="contained"
            startIcon={<SendIcon />}
          >
            Send Message
          </SendMessageButton>
          <AddFriendButton
            disabled={isValidating || isLoading}
            variant="outlined"
            startIcon={<AddIcon />}
          >
            Add Friend
          </AddFriendButton>
        </Box>
      </ContainerStyled>
    </section>
  );
}
