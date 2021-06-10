import React from "react";
import { useQuery } from "@apollo/client";

import { GET_ALL_USERS } from "../graphql/Query";

export const UserLists = () => {
  console.log("UserLists rendered!");
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{`Error! ${error.message}`}</div>;

  return (
    <div>
      <h1>UserLists</h1>
      <ul>
        {data &&
          data.getAllUsers.map((user: any) => (
            <li key={user.id}>
              {user.name} / {user.username}
            </li>
          ))}
      </ul>
    </div>
  );
};
