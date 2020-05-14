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

import SvgMapMacedonia from './components/map/SvgMapMacedonia';
import TaskDashboardStoreConsumer from './consumers/TaskDashboardStoreConsumer';
import { StatusReducer } from './reducers/StatusReducer';

const combinedReducer = combineReducers(StatusReducer, StateReducer, TaskReducer, AdReducer, GraphQLReducer);

//console.log(combinedReducer);


function App() {



  return (
    <div>



      <Store reducer={combinedReducer}>
        <Router>

          <Route exact
            path="/tasks">
            <TaskDashboardStoreConsumer />
          </Route>
          <Route exact
            path="/ads">
            <AdListStoreConsumer />
          </Route>
          <Route exact
            path="/currency">
            <CurrencyListStoreConsumer />
          </Route>
          <Route exact path="/map">
            {/* how to use with custom titles
            <SvgMapMacedonia width={1000} height={791}
                  style={{ fill: "#7c7c7c", stroke: "#ffffff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }}
                  selectedStyle={{ fill: "red" }}
                  hoverStyle={{ fill: "blue" }}
                  onSelect={(e) => console.log(e.target.getAttribute("name"))}
                  onHover={(e) => console.log(e.target.getAttribute("name"))}
                  textStyle={{ fontSize: 12, strokeWidth: 1, stroke: "black", fill: "red" }}
                  titles={["Smile", "react", "tutorials", "македонски"]}
                /> */}

            <SvgMapMacedonia width={1000} height={791}
              style={{ fill: "#7c7c7c", stroke: "#ffffff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }}
              selectedStyle={{ fill: "red" }}
              hoverStyle={{ fill: "blue" }}
              onSelect={(e) => console.log(e.target.getAttribute("name"))}
              onHover={(e) => console.log(e.target.getAttribute("name"))}
              textStyle={{ fontSize: 12, strokeWidth: 1, stroke: "black", fill: "red" }}
            />

          </Route>

        </Router>
      </Store>
    </div>
  )
}

export default App;
