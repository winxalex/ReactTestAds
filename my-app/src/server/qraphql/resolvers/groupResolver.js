import GroupMutation from "../../mutation/GroupMutation";
import Group from "../../db/shemas/Group";



const groupResolver = {
    Query: {

        groups: () => Group.find()
    },
    Mutation: GroupMutation

}



export default groupResolver;