import User from "../../db/shemas/User";
import mongoose from 'mongoose'

const taskResolver = {
    Query: {
        hello: () => {

            return "mile kitic";
        },
        users: () => User.find()
    },
    Mutation: {
        createUser: async (_, { name }) => {
            const user = await User.create({ id: new mongoose.Types.ObjectId(), name });
            console.log(user._id);
            return user;
        },
        createUserNoReturn: async (_, { name }) => {
            const user = await User.create({ id: new mongoose.Types.ObjectId(), name });
            if (user)
                return true;
            else return false;
        }
    }

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