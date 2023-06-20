"use client";

import { useAppSelector } from "../redux/hooks";
import {
  NameText,
  LastOnlineText,
  BoxStyled,
  ContainerStyled,
  SendMessageButton,
  AddFriendButton,
} from "./styles/ProfileHeader.styles";
import Colors from "../colors/colors";
import Image from "next/image";
import useUsers from "../hooks/useUsers";
import avatar from "../../public/images/avatar.png";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";

export default function ProfileHeader() {
  const page = useAppSelector((state) => state.paginationReducer.page);
  const { isLoading, isValidating } = useUsers(page, 20);

  return (
    <section
      style={{
        height: "9.75rem",
        backgroundColor: Colors.primary,
      }}
    >
      <ContainerStyled>
        <BoxStyled>
          <Image src={avatar} alt="avatar" priority width="148" height="148" />
        </BoxStyled>
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
