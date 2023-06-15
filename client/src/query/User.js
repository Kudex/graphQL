import { gql } from "@apollo/client";

export const getUsersList = gql`
  query {
    getUsersList {
      id
      username
      name
      age
    }
  }
`;
