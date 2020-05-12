import React from 'react'
import { ReactSortable } from 'react-sortablejs';
import TaskItem from './TaskItem';


export const TaskList = ({ tasks, name, onSetList }) => (
    <div>
        <h3>{name}</h3>
        <ReactSortable group="my" list={tasks} setList={
            onSetList
        }>

            {tasks.map(item => (
                <TaskItem key={item._id} name={item.name}></TaskItem>
            ))}
        </ReactSortable>
    </div>
);




