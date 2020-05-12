import { initialTaskState } from "../server/initialTaskState";
import uuid from "uuid";

import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import update from 'immutability-helper';


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


                console.log(this);
                //  console.log(data.user);

                if (data && data.user) {
                    // console.log({
                    //     ...this, user: data.user
                    // });
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
    updateGroup(tasks, groupInx) {

        return {
            ...this, user: { groups: update(this.user.groups, { [groupInx]: { tasks: { $set: tasks } } }) }
        }


    }


}