import React from 'react'
import Store from './store/Store'
import './App.css';
import { combineReducers } from './reducers/utility'
import { AdReducer } from './reducers/AdReducer';
import { StateReducer } from './reducers/StateReducer';
import { TaskReducer } from './reducers/TaskReducer';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import AdListStoreConsumer from './consumers/AdListStoreConsumer';
import CurrencyListStoreConsumer from './consumers/CurrencyListStoreConsumer';
import { GraphQLReducer } from './reducers/GraphQLReducer';


const combinedReducer = combineReducers(StateReducer, TaskReducer, AdReducer, GraphQLReducer);

//console.log(combinedReducer);

function App() {
  return (
    <div>
      <Store reducer={combinedReducer}>
        <Router>


          <Route exact
            path="/ads">
            <AdListStoreConsumer />
          </Route>
          <Route exact
            path="/currency">
            <CurrencyListStoreConsumer />
          </Route>

        </Router>
      </Store>
    </div>
  )
}

export default App;
