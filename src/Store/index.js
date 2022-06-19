import { legacy_createStore as createStore, combineReducers } from "redux";

import listReducer from "./Modules/listTransactions/reducer";

const reducers = combineReducers({ list: listReducer });

const store = createStore(reducers);

export default store;
