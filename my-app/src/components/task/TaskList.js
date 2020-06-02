import React from 'react'
import { ReactSortable } from 'react-sortablejs';
import TaskItem from './TaskItem';
import styled from 'styled-components'

//Info on ReachSortable events:
//https://github.com/SortableJS/Sortable#options


const Container = styled.div`
margin:8px;
border:1px solid lightgray;
border-radius:2px;
`;
const Title = styled.h3`
padding:8px;

`;

const ReactSortableStyle = {
    padding: "8px",
    minHeight: 300
}




// const onStart = (evt) => {

// }

//if you group lists they need to have same value for prop "group"
export const TaskList = ({ tasks, groupIdName, name, onSetList, onAdd, onRemove, onStart, onEnd }) => (
    <Container>
        <Title>{name}</Title>
        <ReactSortable
            style={ReactSortableStyle} group={groupIdName} list={tasks} // Element is dropped into the list from another list
            onAdd={onAdd}
            onRemove={onRemove}
            setList={onSetList}
            onEnd={onEnd}
            onStart={onStart}
        >
            {tasks.map(item => (
                <TaskItem key={item._id} name={item.name}></TaskItem>
            ))}
        </ReactSortable>
    </Container>
);




