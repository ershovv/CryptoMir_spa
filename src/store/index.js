import {combineReducers, createStore} from "redux";
import {loginReducer} from "./loginReducer";
import {priceReducer} from "./priceReducer";

const rootReducer = combineReducers({
	login: loginReducer,
	price: priceReducer,
})

export const store = createStore(rootReducer);