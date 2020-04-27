import React from 'react'
import { BehaviorSubject, isObservable } from 'rxjs'
import { useState, useEffect } from 'react'
import { skip } from 'rxjs/operators'

//https://codesandbox.io/s/how-react-should-be-50wp0
// https://github.com/leandrohsilveira/reactjs-hooks-rxjs

export const StoreContext = React.createContext();

const subject = new BehaviorSubject(null);


export default function Store({ reducer, children }) {


    //console.log(reducer.initialState);
    const [state, setState] = useState(reducer.initialState);

    console.log(state);

    useEffect(() => {
        const sub = subject.pipe(skip(1)).subscribe(s => setState(s));
        return () => sub.unsubscribe();
    }, [])

    const apply = (f, ...args) => {

        const o = f.apply(state, args);
        const p = Promise.resolve(o);

        if (p === o) {
            console.log("promise");
            p.then(v => subject.next(v));
        } else if (isObservable(o)) {
            o.subscribe(v => subject.next(v));
        } else

            subject.next(o);
    }




    return (


        <StoreContext.Provider value={{ apply: apply, reducer, getState: () => state, getSubject: () => subject }}>
            {
                children
            }
        </StoreContext.Provider>


    )
}
