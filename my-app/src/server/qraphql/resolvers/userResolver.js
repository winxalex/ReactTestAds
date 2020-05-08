
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

        users: () => User.find()

    },
    User: {
        groups: (user) => {
            return Group.find({ "owner": user._id });
        }
    }



    ,
    Mutation: UserMutation

}



export default userResolver;