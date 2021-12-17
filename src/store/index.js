import {combineReducers, createStore} from "redux";
import {loginReducer} from "./loginReducer";

const rootReducer = combineReducers({
	login: loginReducer,

})

export const store = createStore(rootReducer);