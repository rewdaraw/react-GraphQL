import React, { useState } from "react";

import { useMutation } from "@apollo/client";

import { CREATE_USER } from "../graphql/Mutation";

export const UserInputs = () => {
  console.log("UserInputs rendered!")
  const [userInfo, setUserInfo] = useState({
    name: "",
    username: "",
    password: "",
  });

  const [createUser, { loading: mutationLoading, error: mutationError }] =
    useMutation(CREATE_USER);

  return (
    <>
      <input
        type="text"
        placeholder="name"
        value={userInfo.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUserInfo({ ...userInfo, name: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="username"
        value={userInfo.username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUserInfo({ ...userInfo, username: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="password"
        value={userInfo.password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUserInfo({ ...userInfo, password: e.target.value })
        }
      />
      <button
        onClick={() =>
          createUser({
            variables: {
              name: userInfo.name,
              username: userInfo.username,
              password: userInfo.password,
            },
          })
        }
      >
        create user
      </button>
      {/* TODO: mutation実行時のnetwork errorを実装する、以下はnormalなerror */}
      {mutationLoading && <p>Loading...</p>}
      {mutationError && <p>Error :( Please try again</p>}
    </>
  );
};
