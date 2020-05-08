import mongoose, { Schema } from "mongoose";




const GroupShema = new Schema({
    name: String,
    owner: Schema.Types.ObjectId
}, { autoCreate: true });//this option will create "tasks" collection


const Group = mongoose.model('Group', GroupShema);
export default Group;