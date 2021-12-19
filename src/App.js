import React from "react";
import Currency from "./pages/Currency";
import Trends from "./pages/Trends";
import Login from "./pages/Login";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

function App() {

	const dispatch = useDispatch();

	async function fetch() {
		const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false\'')
			.then(response => (dispatch({type: 'UPDATE', data: response.data})))
			.catch(error => console.log(error))
		console.log(response);
	}

	fetch();

	// setInterval(function(){
	// 	fetch();
	// }, 1500);

	// var callAjax = function(){
	// 	// Write you ajax here
	// }

  return (
    <BrowserRouter>
		<NavBar/>
		<AppRouter/>
    </BrowserRouter>
  );
}

export default App;
