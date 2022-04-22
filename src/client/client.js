import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./Routes"
import { BrowserRouter } from "react-router-dom";
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux" 
import createReducer from './reducers';
const store = createStore(createReducer(),{},applyMiddleware(thunk));
ReactDOM.hydrate(
    <Provider store={store}>

      <BrowserRouter>
        <Routes/>
      </BrowserRouter>

    </Provider>,
    document.querySelector("#root")
  );
  