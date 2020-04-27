export const combineReducers = (...args) => {

    let currentState = {};

    const numReducers = args.length;
    for (let index = 0; index < numReducers; index++) {
        const reducer = args[index];
        currentState = { ...currentState, ...reducer, initialState: { ...reducer.initialState, ...currentState.initialState } }
    }

    return currentState;
};