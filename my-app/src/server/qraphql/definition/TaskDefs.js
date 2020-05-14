import { gql } from "apollo-server-express";

const TaskDefs = gql`
    extend type Query{
       
        tasks:[Task!]!
    }

    type Task{
        _id:ID,
        name:String!,
        group:ID!,
        owner:ID!,
        priority:Int,
        isComplete:Boolean
    
    }
   

    extend type Mutation{
       
        createTask(name:String,group:ID!,owner:ID!):Boolean,
        updateTask(_id:ID!, group:ID,priority:Int, isComplete:Boolean):Int
    }

   
`

export default TaskDefs;


