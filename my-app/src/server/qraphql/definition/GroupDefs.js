import { gql } from "apollo-server-express";

const GroupDefs = gql`
    extend type Query{
       
        groups:[Group!]!
    }

    type Group{
       
        name:String!,
        owner:ID!,
        groups: Group
    }
   

    extend type Mutation{
       
        createGroup(name:String,owner:ID!):Boolean,
       
    }

   
`

export default GroupDefs;