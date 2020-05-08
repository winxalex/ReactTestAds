import { StoreContext } from '../store/Store';
import React, { useState } from 'react'
import { ReactSortable } from "react-sortablejs";
import arrayMove from 'array-move';
import { TaskLayout } from '../components/task/TaskLayout';
//import TaskList from './components/task/TaskList'





const initialState = {
    groups: [{
        name: "To Do",
        id: "G1",
        owner: "U1"
    }, {
        name: "Doing",
        id: "G2",
        owner: "U1"
    }, {
        name: "Done",
        id: "G3",
        owner: "U1"
    }
    ]
};

export default function TaskListStoreConsumer({ group, ...rest }) {

    // const [state, setState] = useState({
    //     list1: [
    //         { id: 1, name: "shrek1" },
    //         { id: 2, name: "shrek2" },
    //         { id: 3, name: "shrek3" },
    //         { id: 4, name: "shrek4" }
    //     ]
    //     ,
    //     list2: [
    //         { id: 2, name: "fiona1" },
    //         { id: 3, name: "fiona2" },
    //         { id: 4, name: "fiona3" }
    //     ]
    // });


    const [state, setState] = useState({
        list:
            [
                { id: 1, name: "shrek1" },
                { id: 2, name: "shrek2" },
                { id: 3, name: "shrek3" },
                { id: 4, name: "shrek4" }
            ],
        list1:
            [
                { id: 5, name: "fiona1" },
                { id: 6, name: "fiona2" },
                { id: 7, name: "fiona3" },
                { id: 8, name: "fiona4" }
            ]
    });



    const { list, list1 } = state;
    return (



        <div>

            <ReactSortable group="my" list={state.list} setList={
                (l) => setState({
                    ...state, list: l
                })
            }>
                {list.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </ReactSortable>

            <hr></hr>
            <ReactSortable group="my" list={state.list1} setList={
                (l) => setState({
                    ...state, list1: l
                })
            }>
                {list1.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </ReactSortable>
            {/* <ReactSortable group="my" list={state.list1} setList={setState}>
                {state.list1.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </ReactSortable>
            <ReactSortable group="my" list={state.list2} setList={setState}>
                {state.list2.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </ReactSortable> */}


        </div >

    )
}










