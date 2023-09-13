import {applyMiddleware, combineReducers,} from "redux";
import {createStore} from "redux";

import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import responseReducer from "./responceReducer";
import charaptersReducer from  "./charaptersReducer"
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
    responce:responseReducer,
    charapters : charaptersReducer,
    filters : filterReducer,
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))