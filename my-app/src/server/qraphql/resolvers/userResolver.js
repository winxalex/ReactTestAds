
import UserMutation from "../../mutation/UserMutation";
import User from "../../db/shemas/User";


const userResolver = {
    Query: {

        users: () => User.find()
    },
    Mutation: UserMutation

}



export default userResolver;