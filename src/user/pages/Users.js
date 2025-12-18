import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image: "https://picsum.photos/300/300",
      places: 3,
    },
    {
      id: "u2",
      name: "Anna Müller",
      image: "https://picsum.photos/301/300",
      places: 5,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
