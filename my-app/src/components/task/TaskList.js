import React from 'react'

import { Link } from 'react-router-dom';

export const TaskList = ({ tasks, name, id, createTaskItem, test }) => (
    <div>
        <h3>{name}</h3>
        {
            tasks.map((task) => (

                <div>{task.name}</div>


            ))
        }
        <button onClick={() => createTaskItem()} > Add Item</button>
        <button onClick={() => test()} > Test</button>
    </div>
);




