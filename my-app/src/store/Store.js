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


    // someFunction = function() {
    //     alert("done");
    // }

    // You'd do this...

    // someFunction = (function() {
    //     var cached_function = someFunction;

    //     return function() {
    //         // your code

    //         var result = cached_function.apply(this, arguments); // use .apply() to call it

    //         // more of your code

    //         return result;
    //     };
    // })();


    const apply = (f, ...args) => {

        // console.log("apply");

        const o = f.apply(state, args);

        const p = Promise.resolve(o);

        if (p === o) {
            //console.log("promise");
            p.then(v => subject.next(v));
        } else if (isObservable(o)) {
            //console.log("promise");
            o.subscribe(v => subject.next(v));
        } else

            subject.next(o);
    }



    return (


        <StoreContext.Provider value={{ apply, reducer, getState: () => state, getSubject: () => subject }}>
            {
                children
            }
        </StoreContext.Provider>


    )
}
