import { combineReducers } from "redux";
import { Reducer } from "./Reducer";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";


const rootReducer = combineReducers({user: Reducer});
const Store = configureStore({reducer: rootReducer, middleware: [thunk, logger]});
export default Store;