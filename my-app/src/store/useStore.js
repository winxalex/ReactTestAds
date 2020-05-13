import { useEffect, useState } from "react";
import { BehaviorSubject, isObservable } from 'rxjs'
import { skip } from 'rxjs/operators'

const subject = new BehaviorSubject(null);

const proxyTargetObject = {
    state: null,
    reducer: null
};

let _store = null;

const getStore = () => {

    if (_store == null) {


        _store = new Proxy(proxyTargetObject, {

            get: function ({ reducer, state }, name) {

                if (reducer) {
                    const f = reducer[name];

                    if (f) {

                        return function (...args) {

                            const result = f.apply(state, args)



                            const p = Promise.resolve(result);

                            if (p === result) {
                                //console.log("promise");
                                p.then((v) => {

                                    subject.next(v);

                                });
                            } else if (isObservable(result)) {
                                //console.log("isObservable");
                                result.subscribe(v => subject.next(v));
                            } else

                                subject.next(result);

                            //should I return something?
                            return result;
                        }


                    }
                }


                return function () {
                    console.error(`No function/property "${name}" found in store reducers`);
                };
            }

        });
    }

    return _store;
}

export function useStore(reducer) {

    //console.log(reducer.initialState);
    const [state, setState] = useState(reducer.initialState);

    //console.log("current State:", state);

    useEffect(() => {



        const sub = subject.pipe(skip(1)).subscribe(s => {

            //console.log("set s to:", s);

            setState(s);
        });
        return () => sub.unsubscribe();
    }, [])

    proxyTargetObject.reducer = reducer;
    proxyTargetObject.state = state;






    return [getStore(), state, subject];
}