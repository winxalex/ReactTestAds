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


let _destinationGroup = null;

export default function TaskDashboardStoreConsumer() {



    const { store, getState } = useContext(StoreContext);

    useEffect(() => {

        //only for test will be given my authorization logic JWT
        //reducer.getTasks("5eaebcb68c361120300dad69");
        store.getTasks("5eaebcb68c361120300dad69");

        return () => {
            // cleanup
        }
    }, [store]);

    //!!Called on new owner list
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

        console.log(evt, "old=", evt.oldIndex, "new=", evt.newIndex, group);

        _destinationGroup = group;

    };


    //its called when you start dragging or after dropping item in list
    // also is called in this order onAdd in new owner list, setList with
    // tasks of new owner list, then onRemove in previous owner, then setList in
    // previous owner
    const setList = (listOfTasks, groupIndex) => {

        const { tasksStatus } = getState();

        //check of lenghts prevent reordering on list => useful when tasks has priority
        // if (tasksStatus == 1 && groups && groups[index].tasks.length !== listOfTasks.length)
        if (tasksStatus === 1) {
            console.log(listOfTasks, groupIndex);
            store.setTaskList(listOfTasks, groupIndex);
        }


    };


    // Element is removed from the list into another list
    //!!Called on previous owner list
    const onRemove = (/**Event*/evt, group) => {
        // same properties as onEnd

        if (_destinationGroup) {

            const task = group.tasks[evt.oldIndex];
            console.log(evt, "old=", evt.oldIndex, "new=", evt.newIndex, _destinationGroup, task);
            group = _destinationGroup;
            _destinationGroup = null;
            store.updateTask(task, group, evt.newIndex, group.name === "Done" ? true : false);
        }

        //console.log(evt, evt.oldIndex, evt.newIndex, group, _currentTask);
        //console.log(evt, "old=", evt.oldIndex, "new=", evt.newIndex, group);

    };



    const { groups } = getState().user;

    return (



        <Container>

            {
                groups.map((group, index) =>
                    <div key={index}>

                        <TaskList tasks={group.tasks} name={group.name}
                            groupIdName="my"
                            onRemove={(e) => onRemove(e, group)}
                            onAdd={(e) => onAdd(e, group)}
                            onSetList={(l) => setList(l, index)} />
                    </div>
                )
            }



        </Container>

    )
}








