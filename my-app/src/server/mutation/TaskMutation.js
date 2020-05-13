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
    updateTask: async (_, { _id, group, isComplete }) => {
        const upd = { group, isComplete };
        Object.keys(upd).forEach(key => upd[key] === undefined && delete upd[key]);
        console.log(upd);
        const res = await Task.updateOne({ _id }, upd, {});
        return res.nModified;
    }
}

export default TaskMutation;