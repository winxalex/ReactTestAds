import { initialTaskState } from "../server/initialTaskState";
import uuid from "uuid";

import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import update from 'immutability-helper';


// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';
// import ApolloClient from 'apollo-client';

// const cache = new InMemoryCache();

// const client = new ApolloClient({
//     link: new HttpLink(),
//     cache
// });

const client = new ApolloClient({
    uri: `http://localhost:${process.env.REACT_APP_GRAPHQL_PORT}/graphql`,
});

export const TaskReducer = {


    initialState: initialTaskState,


    /// !DON"T USE ARROW FUNCTIONS
    //Functions are called with "prevState" as "this"
    //!!! Funcitons are called on state object so "this" is actual state
    createTask(toGroup) {


        return {
            ...this, tasks: [
                ...this.tasks, {
                    id: uuid(),
                    name: "New Task",
                    group: toGroup.id,
                    owner: toGroup.ownerID,
                    isComplete: false
                }
            ]
        };

    },
    getTasks(userId) {

        //console.log(userId);

        return client
            // .query({
            //     query: getTasksGQL,
            //     variables: { userId }

            // })
            .query({

                query: gql`
                    {
                        user(_id: "${userId}") {
                        name,
                        groups{
                            _id,
                            name,
                            tasks{
                                _id,
                                name
                            }
                        }
                        }
                    }
            `

            })
            .then(({ data }) => {

                if (data && data.user) {

                    return {
                        ...this, tasksStatus: 1, user: { groups: data.user.groups }
                    }
                }

                else return this;


            })
            .catch(error => {
                console.error("TaskReducer>getTasks:" + error);
                return this;
            }
            );
    },
    setTaskList(tasks, groupIndex) {

        return {
            ...this, user: { groups: update(this.user.groups, { [groupIndex]: { tasks: { $set: tasks } } }) }
        }


    },
    updateTask(task, group, isComplete) {

        const MY_MUTATE = gql`
        mutation {
            updateTask(
                _id: "${task._id}",
                group:"${group._id}"
                isComplete: ${isComplete}
            )
          }`





        client.mutate({

            mutation: MY_MUTATE

        })
            .then(({ data }) => {

                console.log(data);


            })
            .catch(error => {
                console.error("TaskReducer>getTasks:" + error);
                return this;
            }
            );

        return this;

    }


}


// mutation mile{
//     updateTask(
//     _id:"${task._id}",
//     group:"${group._id}",
//     isComplete:false
//   )
//     }