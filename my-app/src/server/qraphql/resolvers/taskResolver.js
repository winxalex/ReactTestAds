
import TaskMutation from "../../mutation/TaskMutation";
import Task from "../../db/shemas/Task";

const taskResolver = {
    Query: {

        tasks: () => Task.find()
    },
    Mutation: TaskMutation

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