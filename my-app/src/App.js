//import React, { useState } from 'react'
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

import SvgMapMacedonia from './components/SvgMapMacedonia';

const combinedReducer = combineReducers(StateReducer, TaskReducer, AdReducer, GraphQLReducer);

//console.log(combinedReducer);

function App() {

  //const [state, setstate] = useState({ selected: "", hovered: "" })

  return (
    <div>

      {/* <SvgMapMacedonia width={1000} height={791}
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
