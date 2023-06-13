"use client";

import { openDialog } from "../redux/features/dialogSlice";
import { setCurrentUser } from "../redux/features/usersSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import useUsers from "../hooks/useUsers";
import dayjs from "dayjs";
import { Fragment } from "react";

export default function UserCards() {
  const page = useAppSelector((state) => state.paginationReducer.page);
  const dispatch = useAppDispatch();
  const { users, isLoading, isValidating } = useUsers(page, 20);

  console.log("users:", users);

  // TODO: Fix TypeScript error
  // @ts-ignore
  function handleOpen(user) {
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
        // TODO: Fix TypeScript error
        // @ts-ignore
        users?.map((user, index) => (
          <Box
            key={index}
            onClick={() => handleOpen(user)}
            sx={{
              padding: "2rem 1.75rem",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#ffffff",
              borderRadius: "0.5rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
              cursor: "pointer",
              justifyItems: "center",
              marginBottom: "1rem",
              border: "2px solid #ffffff",
              ":hover": {
                borderColor: "#35bad8",
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "#979797", fontWeight: "400" }}
            >
              {dayjs(user.dob.date).format("DD MMM YYYY")}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#303030", fontWeight: "600" }}
            >
              {user.name.first} {user.name.last}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#979797", fontWeight: "400" }}
            >
              {user.gender}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#303030", fontWeight: "400" }}
            >
              {user.location.country}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#979797", fontWeight: "400" }}
            >
              {user.email}
            </Typography>
          </Box>
        ))
      )}
    </section>
  );
}
