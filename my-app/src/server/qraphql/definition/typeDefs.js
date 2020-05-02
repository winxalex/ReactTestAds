import { gql } from "apollo-server-express";
const typeDefs = gql`
    type Query{
        hello:String!,
        users:[User!]!
    }

    type User{
        id:ID!,
        name:String,

    }

    type Mutation{
        createUser(name:String):User,
        createUserNoReturn(name:String):Boolean
    }

   
`

export default typeDefs;


