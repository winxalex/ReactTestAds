import React from 'react'
import { useStore } from './useStore';


//https://codesandbox.io/s/how-react-should-be-50wp0
// https://github.com/leandrohsilveira/reactjs-hooks-rxjs

export const StoreContext = React.createContext();


export default function Store({ reducer, children }) {

    const [store, state, subject] = useStore(reducer);



    return (


        <StoreContext.Provider value={{ store, getState: () => state, getSubject: () => subject }}>
            {
                children
            }
        </StoreContext.Provider>


    )
}


