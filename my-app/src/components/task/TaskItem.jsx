import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';


const Container = styled.div`
border:1px solid lightgray;
padding: 8px;
margin-bottom:8px;
background-color:white;
`;
export default function TaskItem({ _id, name }) {
    return (
        <Container>
            <NavLink to={`tasks/id=${_id}`}>
                {name}
            </NavLink>
        </Container>
    )
}
