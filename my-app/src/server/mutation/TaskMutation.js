import Task from "../db/shemas/Task";



const TaskMutation =
{
    createTask: async (_, { name, group, owner }) => {


        const task = await Task.create({ name, group, owner, isComplited: false });

        if (task)
            return true;
        else return false;
    },
    updateTask: async (_, { _id, group, insertAfter_id, isComplete }) => {


        //we need to find head
        const task = await Task.collection.find({ "_id": _id });


        if (task.group === group) {//reordering in same list

            //remove from current position
            if (task.prev) {

            }

            if (task.prev) {

            }

        }


        // const upd = { group, prev, isComplete };

        // //remove undefined
        // Object.keys(upd).forEach(key => upd[key] === undefined && delete upd[key]);

        // const res = await Task.updateOne({ _id }, upd, {});
        // return res.nModified;

        return 0;
    }
}

export default TaskMutation;