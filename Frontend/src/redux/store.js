import {legacy_createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { reducer as appReducer } from "./app/reducer";
import { reducer as authReducer } from "./auth/reducer";

// store-
const rootReducer = combineReducers({
    appReducer,
    authReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));