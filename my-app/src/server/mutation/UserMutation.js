import User from "../db/shemas/User";
import mongoose from "mongoose";


const UserMutation =
{
    createUser: async (_, { name }) => {
        const user = await User.create({ name });
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

export default UserMutation;