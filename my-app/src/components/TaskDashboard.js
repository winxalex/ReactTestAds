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
    }, [store]);


    const onAdd = (evt, group) => {
        // var itemEl = evt.item;  // dragged HTMLElement
        // evt.to;    // target list
        // evt.from;  // previous list
        // evt.oldIndex;  // element's old index within old parent
        // evt.newIndex;  // element's new index within new parent
        // evt.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
        // evt.newDraggableIndex; // element's new index within new parent, only counting draggable elements
        // evt.clone // the clone element
        // evt.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving

        // if (evt.to == evt.from) {
        //     if (evt.oldIndex == evt.newIndex) return;
        // }

        console.log(evt, evt.oldIndex, evt.newIndex, group);
    };

    //its called when you start dragging or after dropping item in list
    const setList = (listOfTasks, group) => {

        const { tasksStatus } = getState();

        //check of lenghts prevent reordering on list => useful when tasks has priority
        // if (tasksStatus == 1 && groups && groups[index].tasks.length !== listOfTasks.length)
        // if (tasksStatus === 1)
        //store.updateGroup(listOfTasks, index);
        console.log(listOfTasks, group);
        return listOfTasks;
    };



    const { groups } = getState().user;

    return (



        <Container>

            {
                groups.map((group, index) =>
                    <div key={index} style={{ minHeight: 300, backgroundColor: "gray" }}>

                        <TaskList tasks={group.tasks} name={group.name} onAdd={(e) => onAdd(e, group)} onSetList={(l) => setList(l, group)} />
                    </div>
                )
            }



        </Container>

    )
}








