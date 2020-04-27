import React from 'react'
import Store from './store/Store'
import './App.css';
import { combineReducers } from './reducers/utility'
import { AdReducer } from './reducers/AdReducer';
import { StateReducer } from './reducers/StateReducer';
import { TaskReducer } from './reducers/TaskReducer';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import AdListStoreConsumer from './consumers/AdListStoreConsumer';

const combinedReducer = combineReducers(StateReducer, TaskReducer, AdReducer);

console.log(combinedReducer);

function App() {
  return (
    <div>
      <Router>

        <Store reducer={combinedReducer}>
          <Route exact
            path="/">
            <AdListStoreConsumer />
          </Route>
        </Store>
      </Router>
    </div>
  )
}

export default App;
