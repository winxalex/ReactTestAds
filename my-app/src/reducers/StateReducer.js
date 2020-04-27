import { allBooks } from "../server/books";
import { ajax } from "rxjs/ajax";
import { of } from "rxjs"
import { map, catchError } from "rxjs/operators"
export const StateReducer = {

    initialState: allBooks,

    // setSession() {
    //     console.log("startSession");
    //     return this;
    // }


    //v1 asyc/await return Promise
    // setSession: async function () {
    //     console.log("startSession");
    //     let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //     let data = await response.json()

    //     console.log("endSession");
    //     return {
    //         ...this, tasks: [
    //             ...this.tasks, {
    //                 name: "Compile ES6",
    //                 id: "T3",
    //                 group: "G2",
    //                 owner: "U2",
    //                 isComplete: false,
    //             }
    //         ]
    //     }
    // }


    //v2 ajax rxjs return Observable
    setSession() {


        return ajax.getJSON(`https://api.github.com/users?per_page=5`).pipe(
            map(userResponse => {
                return {
                    ...this, tasks: [
                        ...this.tasks, {
                            name: "Compile ES6",
                            id: "T3",
                            group: "G2",
                            owner: "U2",
                            isComplete: false,
                        }
                    ]
                }
            }

            ),
            catchError(error => {
                console.log('error: ', error);
                return of(error);
            })
        );




    },




    //v3 fetch/then return Promise
    setSession2() {

        console.log("start Session");
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                return {
                    ...this, tasks: [
                        ...this.tasks, {
                            name: "Compile ES6",
                            id: "T3",
                            group: "G2",
                            owner: "U2",
                            isComplete: false,
                        }
                    ]
                }
            }

            ).catch(error => console.log(error));


    }
}



