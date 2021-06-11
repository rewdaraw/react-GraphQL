import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { CREATE_USER, UPDATE_PASSWORD } from "../graphql/Mutation";

export const UserInputs = () => {
  console.log("UserInputs rendered!");
  const [createUserInfo, setCreateUserInfo] = useState({
    name: "",
    username: "",
    password: "",
  });

  const [updateUserInfo, setUpdateUserInfo] = useState({
    username: "",
    oldPassword: "",
    newPassword: "",
  });

  const [createUser, { loading: createUserLoading, error: createUserError }] =
    useMutation(CREATE_USER);

  const [
    updatePassword,
    { loading: updatePasswordLoading, error: updatePasswordError },
  ] = useMutation(UPDATE_PASSWORD);

  return (
    <>
      <div className="create-user">
        <input
          type="text"
          placeholder="name"
          value={createUserInfo.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCreateUserInfo({ ...createUserInfo, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="username"
          value={createUserInfo.username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCreateUserInfo({ ...createUserInfo, username: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="password"
          value={createUserInfo.password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCreateUserInfo({ ...createUserInfo, password: e.target.value })
          }
        />
        <button
          onClick={() =>
            createUser({
              variables: {
                name: createUserInfo.name,
                username: createUserInfo.username,
                password: createUserInfo.password,
              },
            })
          }
        >
          create user
        </button>
      </div>

      <div className="update-user">
        <input
          type="text"
          placeholder="username"
          value={updateUserInfo.username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUpdateUserInfo({ ...updateUserInfo, username: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="oldPassword"
          value={updateUserInfo.oldPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUpdateUserInfo({
              ...updateUserInfo,
              oldPassword: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="newPassword"
          value={updateUserInfo.newPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUpdateUserInfo({
              ...updateUserInfo,
              newPassword: e.target.value,
            })
          }
        />
        <button
          onClick={() =>
            updatePassword({
              variables: {
                username: updateUserInfo.username,
                oldPassword: updateUserInfo.oldPassword,
                newPassword: updateUserInfo.newPassword,
              },
            })
          }
        >
          update password
        </button>
      </div>

      {/* TODO: mutation実行時のnetwork errorを実装する、以下はnormalなerror */}
      {(createUserLoading || updatePasswordLoading) && <p>Loading...</p>}
      {(createUserError || updatePasswordError) && (
        <p>Error :( Please try again</p>
      )}
    </>
  );
};
