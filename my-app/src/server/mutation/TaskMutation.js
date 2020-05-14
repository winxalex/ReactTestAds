import Task from "../db/shemas/Task";



const TaskMutation =
{
    createTask: async (_, { name, group, owner }) => {


        const task = await Task.create({ name, group, owner, isComplited: false });

        if (task)
            return true;
        else return false;
    },
    updateTask: async (_, { _id, group, priority, isComplete }) => {
        const upd = { group, priority, isComplete };

        //remove undefined
        Object.keys(upd).forEach(key => upd[key] === undefined && delete upd[key]);

        const res = await Task.updateOne({ _id }, upd, {});
        return res.nModified;
    }
}

export default TaskMutation;