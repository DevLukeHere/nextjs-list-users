"use client";

import { Fragment } from "react";
import { openDialog } from "../redux/features/dialogSlice";
import { setCurrentUser } from "../redux/features/usersSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  UserNameText,
  TextBlack,
  TextGrey,
  SkeletonStyled,
  BoxStyled,
} from "./styles/UserCards.styles";
import useUsers from "../hooks/useUsers";
import dayjs from "dayjs";
interface userProps {
  cell: string;
  dob: {
    date: string;
    age: number;
  };
  email: string;
  gender: string;
  id: {
    name: string;
    value: string;
  };
  location: {
    city: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    country: string;
    postcode: number;
    state: string;
    street: {
      name: string;
      number: number;
    };
    timezone: {
      description: string;
      offset: string;
    };
  };
  login: {
    md5: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;
    username: string;
    uuid: string;
  };
  name: {
    first: string;
    last: string;
    title: string;
  };
  nat: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  registered: {
    age: number;
    date: string;
  };
}

export default function UserCards() {
  const page = useAppSelector((state) => state.paginationReducer.page);
  const dispatch = useAppDispatch();
  const { users, isLoading, isValidating } = useUsers(page, 20);

  function handleOpen(user: unknown) {
    dispatch(openDialog());
    dispatch(setCurrentUser(user));
  }

  return (
    <section>
      {isLoading || isValidating ? (
        <Fragment>
          <SkeletonStyled variant="rectangular" width={"100%"} height={80} />
          <SkeletonStyled variant="rectangular" width={"100%"} height={80} />
          <SkeletonStyled variant="rectangular" width={"100%"} height={80} />
        </Fragment>
      ) : (
        users?.map((user: userProps, index: number) => (
          <BoxStyled key={index} onClick={() => handleOpen(user)}>
            <TextGrey variant="body2">
              {dayjs(user?.dob?.date).format("DD MMM YYYY")}
            </TextGrey>
            <UserNameText variant="body2">
              {user?.name?.first} {user?.name?.last}
            </UserNameText>
            <TextGrey variant="body2">{user?.gender}</TextGrey>
            <TextBlack variant="body2">{user?.location?.country}</TextBlack>
            <TextGrey variant="body2">{user?.email}</TextGrey>
          </BoxStyled>
        ))
      )}
    </section>
  );
}
