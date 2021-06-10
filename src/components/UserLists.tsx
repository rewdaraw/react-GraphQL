import React from "react";
import { useMutation, useQuery } from "@apollo/client";

import { GET_ALL_USERS } from "../graphql/Query";
import { DELETE_USER } from "../graphql/Mutation";

export const UserLists = () => {
  console.log("UserLists rendered!");
  const { loading, error, data } = useQuery(GET_ALL_USERS);
  const [deleteUser, { loading: mutationLoading, error: mutationError }] =
    useMutation(DELETE_USER);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{`Error! ${error.message}`}</div>;

  return (
    <div>
      <h1>UserLists</h1>
      <ul>
        {data &&
          data.getAllUsers.map((user: any) => (
            <li key={user.id}>
              {user.id} / {user.name} / {user.username}{" "}
              <button
                onClick={() => deleteUser({ variables: { id: user.id } })}
              >
                Delete me
              </button>
            </li>
          ))}
      </ul>
      {mutationLoading && <p>Loading...</p>}
      {mutationError && <p>Error :( Please try again</p>}
    </div>
  );
};
