import gql from "graphql-tag";

const typeDefs = gql`
    type User {
        id: ID!
        name: String
        walletAddress: String!
        createdAt: String
    }
    type Query {
        user(id: ID!): User!
        getUsers: [User]
    }
`

export default typeDefs;