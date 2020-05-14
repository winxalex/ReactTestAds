import mongoose, { Schema } from "mongoose";





const TaskShema = new Schema({
    name: String,
    //id: Schema.Types.ObjectId, _id is automatically created
    group: Schema.Types.ObjectId,
    owner: Schema.Types.ObjectId,
    priority: Number,//Int32 in MongoDB
    isComplete: Boolean
}, { autoCreate: true });//this option will create "tasks" collection


const Task = mongoose.model('Task', TaskShema);
export default Task;



