import { StoreContext } from '../store/Store';
import React, { useState, useContext, useEffect } from 'react'
import { ReactSortable } from "react-sortablejs";
import arrayMove from 'array-move';
import { TaskLayout } from '../components/task/TaskLayout';
import { TaskList } from '../components/task/TaskList';
import TaskItem from '../components/task/TaskItem';
//import TaskList from './components/task/TaskList'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: inherit;
  & > * {
    width: 100%;
    margin-left: 0.3rem;
    :first-child() {
      margin-left: 0rem;
    }
  }
`;




export default function TaskListStoreConsumer({ group, ...rest }) {



    const { apply, reducer: { getTasks, updateGroup }, getState } = useContext(StoreContext);

    useEffect(() => {

        //only for test will be given my authorization logic JWT
        apply(getTasks, "5eaebcb68c361120300dad69");

        return () => {
            // cleanup
        }
    }, [])



    console.log(getState());

    const { groups } = getState().user;

    return (



        <Container>

            {
                groups.map((group, index) =>
                    <div key={index} style={{ minHeight: 300, backgroundColor: "gray" }}>
                        <h3>{group.name}</h3>
                        <ReactSortable group="my" list={group.tasks} setList={
                            (l) => apply(updateGroup, l, index)
                        }>
                            {group.tasks.map(item => (
                                <TaskItem key={item._id} name={item.name}></TaskItem>
                            ))}
                        </ReactSortable>
                    </div>
                )
            }



        </Container>

    )
}










