import { gql } from "apollo-boost";
export const getTasksGQL = gql`
                   query getTasksGQL($userId:String){
                       user(_id:$userId){
                           name,
                           groups{
                               _id,
                               name,
                               tasks{
                                   _id,
                                   name
                               }
                           }
                       }
                    }
                  
                   `

