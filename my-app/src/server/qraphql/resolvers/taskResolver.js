import User from "../../db/shemas/User";

import UserMutation from "../../mutation/UserMutation";
import TaskMutation from "../../mutation/TaskMutation";

const taskResolver = {
    Query: {
        hello: () => {

            return "mile kitic";
        },
        users: () => User.find()
    },
    Mutation: { ...UserMutation, ...TaskMutation }

}



export default taskResolver;



// const isAuthenticated = (root, args, context, info) => {
//     if (!context.user) {
//       return new Error('Not authenticated')
//     }
//   }

//   Which could be used in an actual field resolver like this:

//   import { combineResolvers } from 'graphql-resolvers'

//   const protectedField = (root, args, context, info) => 'Protected field value'

//   const resolverMap = {
//     Query: {
//       protectedField: combineResolvers(
//         isAuthenticated,
//         protectedField
//       )
//     }
//   }