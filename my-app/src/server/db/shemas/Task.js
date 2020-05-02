import mongoose, { Schema, ObjectId } from "mongoose";




const TaskShema = new Schema({
    name: String,
    //id: Schema.Types.ObjectId, _id is automatically created
    group: Schema.Types.ObjectId,
    owner: Schema.Types.ObjectId,
    isComplete: Boolean
});


const Task = mongoose.model('Task', TaskShema);
export default Task;



