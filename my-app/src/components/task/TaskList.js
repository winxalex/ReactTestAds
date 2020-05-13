import React from 'react'
import { ReactSortable } from 'react-sortablejs';
import TaskItem from './TaskItem';

//Info on ReachSortable events:
//https://github.com/SortableJS/Sortable#options

//if you group lists they need to have same value for prop "group"
export const TaskList = ({ tasks, groupIdName, name, onSetList, onAdd, onRemove }) => (
    <div>
        <h3>{name}</h3>
        <ReactSortable group={groupIdName} list={tasks} // Element is dropped into the list from another list
            onAdd={onAdd}
            onRemove={onRemove}
            setList={onSetList}
        >
            {tasks.map(item => (
                <TaskItem key={item._id} name={item.name}></TaskItem>
            ))}
        </ReactSortable>
    </div>
);




