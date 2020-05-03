import { gql } from "apollo-server-express";

const UserDefs = gql`
    extend type Query{
        hello:String!,
        users:[User!]!
    }

    type User{
       
        name:String,

    }
   
   

    extend type Mutation{
        createUser(name:String):User,
        createUserNoReturn(name:String):Boolean,
      
    }

   
`

export default UserDefs;