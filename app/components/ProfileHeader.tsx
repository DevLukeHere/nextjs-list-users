"use client";

import { useAppSelector } from "../redux/hooks";
import {
  NameText,
  LastOnlineText,
  BoxStyled,
  ContainerStyled,
  SendMessageButton,
  AddFriendButton,
  ContentBox,
} from "./styles/ProfileHeader.styles";
import { Montserrat } from "next/font/google";
import useMediaQuery from "@mui/material/useMediaQuery";
import Colors from "../colors/colors";
import Image from "next/image";
import useUsers from "../hooks/useUsers";
import avatar from "../../public/images/avatar.png";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";

const montserrat = Montserrat({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function ProfileHeader() {
  const page = useAppSelector((state) => state.paginationReducer.page);
  const { isLoading, isValidating } = useUsers(page, 7);
  const matches = useMediaQuery("(min-width: 900px)");

  return (
    <section
      className={montserrat.className}
      style={{
        height: `${matches ? "9.75rem" : "auto"}`,
        backgroundColor: Colors.primary,
      }}
    >
      <ContainerStyled>
        <BoxStyled>
          <Image
            src={avatar}
            alt="avatar"
            priority
            width={matches ? 148 : 100}
            height={matches ? 148 : 100}
          />
        </BoxStyled>
        <ContentBox>
          <NameText>john doe</NameText>
          <LastOnlineText>Last online: 2 days ago</LastOnlineText>
        </ContentBox>
        <ContentBox>
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
        </ContentBox>
      </ContainerStyled>
    </section>
  );
}
