import Group from "../db/shemas/Group";



const GroupMutation =
{
    createGroup: async (_, { name, owner }) => {


        const group = await Group.create({ name, owner });

        if (group)
            return true;
        else return false;
    }
}

export default GroupMutation;