import { gql } from "apollo-server-express";

const TaskDefs = gql`
    extend type Query{
       
        tasks:[Task!]!
    }

    type Task{
       
        name:String!,
        group:ID!,
        owner:ID!,
        isComplete:Boolean
    
    }
   

    extend type Mutation{
       
        createTask(name:String,group:ID!,owner:ID!):Boolean
    }

   
`

export default TaskDefs;


