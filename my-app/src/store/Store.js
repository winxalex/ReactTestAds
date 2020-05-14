import React from 'react'
import { useStore } from './useStore';


export const StoreContext = React.createContext();


export default function Store({ reducer, children }) {

    const [store, state, subject] = useStore(reducer);

    console.log(state);

    return (


        <StoreContext.Provider value={{ store, getState: () => state, getSubject: () => subject }}>
            {
                children
            }
        </StoreContext.Provider>


    )
}


