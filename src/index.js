import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import {createStore} from "redux";
import {Provider} from "react-redux";

const defaultState = {
	isAuth: false
}

const reducer = (state = defaultState, action) => {
	switch (action.type) {

		case "LOG_OUT":
			return {...state, isAuth: false}

		case "LOG_IN":
			return {...state, isAuth: true}

		default:
			return state
	}
}

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);