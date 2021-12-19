import React from 'react';
import {Routes, Route} from "react-router-dom";
import Login from "../pages/Login";
import Currency from "../pages/Currency";
import Trends from "../pages/Trends";
import Home from "../pages/Home";
import {useSelector} from "react-redux";

const AppRouter = () => {

	const isAuth  = useSelector(state => state.login.isAuth);

	return (
		isAuth ?
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/currency' element={<Currency />} />
				<Route path='/trends' element={<Trends />} />
				<Route path="/" element={<Home/>} />
				<Route path="*" element={<Login/>} />
			</Routes>
			:
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path="/" element={<Home/>} />
				<Route path="*" element={<Login/>} />
			</Routes>
	);
};

export default AppRouter;