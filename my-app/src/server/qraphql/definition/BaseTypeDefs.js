import { gql } from "apollo-server-express";


//!!!Note: BaseTypeDefs:String is put to fool apollo not to throw syntax error

const BaseTypeDefs = gql`
    type Query{
        BaseTypeDefs:String
       
    }

  
    type Mutation{
        BaseTypeDefs:String
    }

   
`

export default BaseTypeDefs;