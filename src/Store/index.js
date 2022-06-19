import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";

import listReducer from "./Modules/listTransactions/reducer";

const reducers = combineReducers({ list: listReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
