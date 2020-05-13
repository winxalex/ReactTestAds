import { StoreContext } from '../store/Store';
import React, { useContext, useEffect } from 'react'
import { TaskList } from '../components/task/TaskList';
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




export default function TaskDashboard() {



    const { store, getState } = useContext(StoreContext);

    useEffect(() => {

        //only for test will be given my authorization logic JWT
        //reducer.getTasks("5eaebcb68c361120300dad69");
        store.getTasks("5eaebcb68c361120300dad69");

        return () => {
            // cleanup
        }
    }, [store])


    //its called when you start dragging or after dropping item in list
    const setList = (listOfTasks, index) => {

        const { tasksStatus } = getState();

        //check of lenghts prevent reordering on list => useful when tasks has priority
        // if (tasksStatus == 1 && groups && groups[index].tasks.length !== listOfTasks.length)
        if (tasksStatus === 1)
            store.updateGroup(listOfTasks, index);

    }



    const { groups } = getState().user;

    return (



        <Container>

            {
                groups.map((group, index) =>
                    <div key={index} style={{ minHeight: 300, backgroundColor: "gray" }}>

                        <TaskList tasks={group.tasks} name={group.name} onSetList={(l) => setList(l, index)} />
                    </div>
                )
            }



        </Container>

    )
}








