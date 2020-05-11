import React, { useState } from 'react'
import TaskListStoreConsumer from '../consumers/TaskListStoreConsumer'

export default function TaskDashboard() {



    return (
        <div>
            <TaskListStoreConsumer />
        </div>
    )
}
