import React from 'react'
import { BehaviorSubject, isObservable } from 'rxjs'
import { useState, useEffect } from 'react'
import { skip } from 'rxjs/operators'

//https://codesandbox.io/s/how-react-should-be-50wp0
// https://github.com/leandrohsilveira/reactjs-hooks-rxjs

export const StoreContext = React.createContext();
const subject = new BehaviorSubject(null);


const redispatchMethods = (obj, state) => {

    const functionString = 'function';

    Object.getOwnPropertyNames(obj).map(item => {

        var origProp = obj[item];

        //if prop is function
        if (typeof origProp === functionString) {

            // obj[item] = function (...args) {
            //     console.log("mile");
            //     return origProp.apply(state, args);
            // }

            // console.log(item);


            obj[item] = function (...args) {

                console.log("calll");

                const result = origProp.apply(state, args)

                const p = Promise.resolve(result);

                if (p === result) {
                    //console.log("promise");
                    p.then(v => subject.next(v));
                } else if (isObservable(result)) {
                    //console.log("isObservable");
                    result.subscribe(v => subject.next(v));
                } else

                    subject.next(result);

                return result;
            }
        }
    })


    return obj;
}

let _store = null;

export default function Store({ reducer, children }) {


    //console.log(reducer.initialState);
    const [state, setState] = useState(reducer.initialState);

    // console.log(state);

    useEffect(() => {


        //store = redispatchMethods(reducer, state);

        //reducer.getTasks("5eaebcb68c361120300dad69");

        const sub = subject.pipe(skip(1)).subscribe(s => setState(s));
        return () => sub.unsubscribe();
    }, [])


    const getStore = () => {

        if (_store == null) {

            _store = new Proxy({}, {

                get: function (target, name) {

                    const f = reducer[name];

                    if (f) {

                        return function (...args) {

                            console.log("call" + name);

                            const result = f.apply(state, args)

                            const p = Promise.resolve(result);

                            if (p === result) {
                                //console.log("promise");
                                p.then(v => subject.next(v));
                            } else if (isObservable(result)) {
                                //console.log("isObservable");
                                result.subscribe(v => subject.next(v));
                            } else

                                subject.next(result);

                            //should I return something?
                            //return result;
                        }


                    }


                    return function () {
                        console.error(name);
                    };
                }
            });
        }

        return _store;

    }

    return (


        <StoreContext.Provider value={{ getStore, getState: () => state, getSubject: () => subject }}>
            {
                children
            }
        </StoreContext.Provider>


    )
}


// const f = reducer[name];

// if (f) {

//     return function (...args) {

//         console.log("calll");

//         const result = f.apply(state, args)

//         const p = Promise.resolve(result);

//         if (p === result) {
//             //console.log("promise");
//             p.then(v => subject.next(v));
//         } else if (isObservable(result)) {
//             //console.log("isObservable");
//             result.subscribe(v => subject.next(v));
//         } else

//             subject.next(result);
//     }
// }