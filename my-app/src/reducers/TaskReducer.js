import { initialTaskState } from "../server/initialTaskState";
import uuid from "uuid";

import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import { getTasksGQL } from "./m";
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

        console.log(userId);

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
                console.log(data.user);

                if (data && data.user) {
                    console.log({
                        ...this, user: data.user
                    });
                    return {
                        ...this, user: data.user
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



        console.log("indx:" + groupInx);
        console.log(tasks);
        console.log(this.user.groups[groupInx].name);
        console.log("------------");



        return {
            ...this, user: { groups: update(this.user.groups, { [groupInx]: { tasks: { $set: tasks } } }) }
        }

        // this.setState({
        //     items: update(this.state.items, {1: {name: {$set: 'updated field name'}}})
        //   })

        return this;
    }


}