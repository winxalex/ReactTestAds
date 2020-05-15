
import UserMutation from "../../mutation/UserMutation";
import User from "../../db/shemas/User";
import Group from "../../db/shemas/Group";
import Task from "../../db/shemas/Task";

// query {
//     users {
//       name,
//       groups {
//         name
//       }
//     }
//   }
const userResolver = {
    Query: {

        users: async () => await User.find(),
        user: async (_, { _id }, context, info) => {
            //console.log(_id);
            return await User.findById(_id);
        }

    },
    User: {
        //user comes from parent in resolver chain a.ka. from Query.users/user
        groups: async (user) => {
            return await Group.find({ "owner": user._id });
        },




    },
    Group: {
        //group comes from parent in resolver chain a.ka. from User
        tasks: async (group) => {

            const tasksQueries = [];

            let task = null;

            //we need to find head
            let taskQuery = await Task.findOne({ "owner": group.owner, "group": group._id, "prev": null },
                function (err, res) {
                    if (err) {
                        console.error(err);
                        return tasksQueries;
                    } else {
                        task = res;
                    }
                }
            );


            if (task) {

                //taskTailQuery.then(a => console.log(a));
                tasksQueries.push(taskQuery);

                while (task.next) {

                    taskQuery = await Task.findOne({ "_id": task.next }, function (err, res) {
                        if (err) {
                            console.error(err);
                            return tasksQueries;
                        } else {
                            task = res;
                        }
                    });

                    tasksQueries.push(taskQuery);

                }


            }

            return tasksQueries;

        }
    },

    Mutation: UserMutation

}



export default userResolver;