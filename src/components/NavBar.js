import React from 'react';
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {LOGIN_ROUTE, CURRENCY_ROUTE, TRENDS_ROUTE, HOME_ROUTE} from "../utils";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const NavBar = () => {

	const login = useSelector(state => state.login.isAuth);

	const name = login ? "Профиль" : "Логин"

	return (
		<Navbar bg="light" variant="light">
			<Container>
				<Navbar.Brand>CryptoMir</Navbar.Brand>
				<Nav className="me-auto">
					<Link className='nav-link' to={LOGIN_ROUTE}> {name} </Link>
					<Link className='nav-link' to={HOME_ROUTE}> Главная </Link>
					<Link className='nav-link' to={CURRENCY_ROUTE}> Валюты </Link>
					<Link className='nav-link' to={TRENDS_ROUTE}>Тренды</Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavBar;