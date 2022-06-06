import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    students: [Student!]!
  }

  type Student {
    display_name: String!
    contact: String!
    phones: [Phone]
  }

  type Phone {
    countryCode: String!
    DDD: String!
    number: String!
  }
`;
