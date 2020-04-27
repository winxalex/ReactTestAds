import { defaultState } from "../server/defaultState";
import uuid from "uuid";

export const TaskReducer = {


    initialState: defaultState,


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

    }
}