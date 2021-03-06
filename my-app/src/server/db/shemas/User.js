import mongoose, { Schema } from "mongoose";



const UserShema = new Schema({
    //id: Schema.Types.ObjectId, _id is automatically created
    name: String,
    // passwordHash: md5("TUPLES"),
    friends: [Schema.Types.ObjectId]
}, { autoCreate: true });//this option will create "tasks" collection


const User = mongoose.model('User', UserShema);
export default User;