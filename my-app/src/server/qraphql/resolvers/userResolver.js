
import UserMutation from "../../mutation/UserMutation";
import User from "../../db/shemas/User";
import Group from "../../db/shemas/Group";
import Task from "../../db/shemas/Task";

// query {
//     users {
//       name,
//       groups {
//         name
//       }
//     }
//   }
const userResolver = {
    Query: {

        users: async () => await User.find(),
        user: async (_, { _id }, context, info) => {
            //console.log(_id);
            return await User.findById(_id);
        }

    },
    User: {
        //user comes from parent in resolver chain a.ka. from Query.users/user
        groups: async (user) => {
            return await Group.find({ "owner": user._id });
        },




    },
    Group: {
        //group comes from parent in resolver chain a.ka. from User
        tasks: async (group) => {

            return await Task.find({ "owner": group.owner, "group": group._id });
        }
    },

    Mutation: UserMutation

}



export default userResolver;