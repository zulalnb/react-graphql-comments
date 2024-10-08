import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query getAllUsers {
    users {
      id
      fullName
    }
  }
`;

export const CREATE_COMMENT_MUTATION = gql`
  mutation AddNewComment($data: CreateCommentInput!) {
    createComment(data: $data) {
      id
    }
  }
`;
