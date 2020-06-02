import React, { useContext } from 'react';
import { TaskList } from '../components/task/TaskList';
import { StoreContext } from '../store/Store';

export default function TaskListStoreConsumer({ props }) {

    const { store } = useContext(StoreContext);

    const onEnd = (evt, tasks) => {

        if (evt.oldIndex) {//we have start and end in same list

            const task = tasks[evt.newIndex];
            let insertAfterTask = null;
            if (tasks.newIndex > 0) {
                insertAfterTask = tasks[evt.newIndex - 1];
            }
            console.log(evt);
            store.updateTask(task, null, insertAfterTask, false);

        }
    }

    return (
        <div>
            <TaskList {...props}
                onEnd={(e) => onEnd(e, props.tasks)}
            />
        </div>
    )
}
