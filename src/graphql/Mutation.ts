import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  # GraphiQLからのcopy & paste
  mutation createUser($name: String, $username: String, $password: String) {
    createUser(name: $name, username: $username, password: $password) {
      id
      name
      username
      password
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      successful
      message
    }
  }
`;
