import Task from "../db/shemas/Task";
import mongoose from "mongoose";


const TaskMutation =
{
    createTask: async (_, { name, group, owner }) => {


        const task = await Task.create({ name, group, owner, isComplited: false });

        if (task)
            return true;
        else return false;
    },
    updateTask: async (_, { id, group, isComplite }) => {
        const res = await Task.updateOne({ id, group, isComplite });
        return res.nModified;
    }
}

export default TaskMutation;