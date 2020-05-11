import React from 'react'
import { NavLink } from 'react-router-dom'

export default function TaskItem({ _id, name }) {
    return (
        <div>
            <NavLink to={`tasks/id=${_id}`}>
                {name}
            </NavLink>
        </div>
    )
}
