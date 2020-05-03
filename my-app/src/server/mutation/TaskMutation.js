import Task from "../db/shemas/Task";
import mongoose from "mongoose";


const TaskMutation =
{
    createTask: async (_, { name, group, owner }) => {


        const taks = await Task.create({ name, group: new mongoose.Types.ObjectId(), owner: new mongoose.Types.ObjectId(), isComplited: false });
        // const taks = await Task.create({ name, group, owner, isComplited: false });
        if (taks)
            return true;
        else return false;
    }
}

export default TaskMutation;