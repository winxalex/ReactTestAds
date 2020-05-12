import { useEffect, useState } from "react";
import { BehaviorSubject, isObservable } from 'rxjs'
import { skip } from 'rxjs/operators'

const subject = new BehaviorSubject(null);
let _store = null;

export function useStore(reducer) {

    //console.log(reducer.initialState);
    const [state, setState] = useState(reducer.initialState);

    console.log("current State:", state);

    useEffect(() => {

        const sub = subject.pipe(skip(1)).subscribe(s => {

            setState(s);
        });
        return () => sub.unsubscribe();
    }, [])


    const getStore = (s) => {

        if (_store == null) {

            //_store = new Proxy({}, {
            _store = new Proxy(state, {

                get: function (target, name) {

                    const f = reducer[name];

                    if (f) {

                        return function (...args) {

                            console.log("call " + name);

                            console.log("will be called on ");
                            // console.log(s);
                            console.log(target);
                            console.log("xxxxxxx ");
                            //const result = f.apply(s, args)
                            const result = f.apply(target, args)



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


                    return function () {
                        console.error(name);
                    };
                }

            });
        }

        return _store;
    }


    return [getStore(state), state, subject];
}