"use client";

import { Fragment } from "react";
import { openDialog } from "../redux/features/dialogSlice";
import { setCurrentUser } from "../redux/features/usersSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Colors from "../colors/colors";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
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
          <Skeleton
            sx={{ borderRadius: "0.5rem", marginBottom: "1rem" }}
            variant="rectangular"
            width={"100%"}
            height={80}
          />
          <Skeleton
            sx={{ borderRadius: "0.5rem", marginBottom: "1rem" }}
            variant="rectangular"
            width={"100%"}
            height={80}
          />
          <Skeleton
            sx={{ borderRadius: "0.5rem" }}
            variant="rectangular"
            width={"100%"}
            height={80}
          />
        </Fragment>
      ) : (
        users?.map((user: userProps, index: number) => (
          <Box
            key={index}
            onClick={() => handleOpen(user)}
            sx={{
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
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: Colors.secondaryGrey, fontWeight: "400" }}
            >
              {dayjs(user?.dob?.date).format("DD MMM YYYY")}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: Colors.black, fontWeight: "600" }}
            >
              {user?.name?.first} {user?.name?.last}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: Colors.secondaryGrey, fontWeight: "400" }}
            >
              {user?.gender}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: Colors.black, fontWeight: "400" }}
            >
              {user?.location?.country}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: Colors.secondaryGrey, fontWeight: "400" }}
            >
              {user?.email}
            </Typography>
          </Box>
        ))
      )}
    </section>
  );
}
