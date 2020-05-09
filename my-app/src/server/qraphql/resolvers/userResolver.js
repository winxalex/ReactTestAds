
import UserMutation from "../../mutation/UserMutation";
import User from "../../db/shemas/User";
import Group from "../../db/shemas/Group";

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

        users: () => User.find(),
        user: async (_, { _id }, context, info) => {
            console.log(_id);
            return await User.findById(_id);
        }

    },
    User: {
        //user comes from parent in resolver chain a.ka. from Query.users/user
        groups: (user) => {
            return Group.find({ "owner": user._id });
        }
    }



    ,
    Mutation: UserMutation

}



export default userResolver;