import { gql } from "apollo-server-express";

const GroupDefs = gql`
    extend type Query{
       
        groups:[Group!]!
    }

    type Group{
        _id:ID,
        name:String!,
        owner:ID!,
        tasks:[Task]
    }
   

    extend type Mutation{
       
        createGroup(name:String,owner:ID!):Boolean,
       
    }

   
`

export default GroupDefs;