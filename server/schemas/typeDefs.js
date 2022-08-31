const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: ID
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }
  input saveBookInput {
    authors: [String]
    bookId: ID
    title: String
    description: String
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User!
  }
  type Query {
    me: User
    users: [User]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: saveBookInput): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
