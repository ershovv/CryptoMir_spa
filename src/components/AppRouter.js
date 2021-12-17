import React from 'react';
import {Routes, Route, Redirect} from "react-router-dom";
import Login from "../pages/Login";
import Currency from "../pages/Currency";
import Trends from "../pages/Trends";
import App from "../App";

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='/currency' element={<Currency />} />
			<Route path='/trends' element={<Trends />} />
			<Route path="/" element={<Login/>} />
		</Routes>
	);
};

export default AppRouter;