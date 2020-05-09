import { gql } from "apollo-server-express";

//shema for gql queries
//actual schema in DB is different (see db/shemas)

const UserDefs = gql`
    extend type Query{
        hello:String!,
        users:[User!]!,
        user(_id:ID!):User
    }

    type User{
       
        name:String,
        groups:[Group]
    }
 
   
   

    extend type Mutation{
        createUser(name:String):User,
        createUserNoReturn(name:String):Boolean,
      
    }

   
`

export default UserDefs;