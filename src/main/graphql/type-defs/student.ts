import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    students: [Student!]
  }

  type Student {
    name: String!
    email: String!
    phones: [Phone]
  }

  type Phone {
    countryCode: String!
    DDD: String!
    number: String!
  }
`;
