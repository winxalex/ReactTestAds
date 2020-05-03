import { gql } from "apollo-server-express";
const typeDefs = gql`
    type Query{
        hello:String!,
        users:[User!]!
    }

    type User{
       
        name:String,

    }
   
    type Task{
       
        name:String!,
        group:ID!,
        owner:ID!,
        isComplete:Boolean

    }

    type Mutation{
        createUser(name:String):User,
        createUserNoReturn(name:String):Boolean,
        createTask(name:String,group:ID!,owner:ID!):Boolean
    }

   
`

export default typeDefs;


