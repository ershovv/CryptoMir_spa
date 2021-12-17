import React from 'react';
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {LOGIN_ROUTE, CURRENCY_ROUTE, TRENDS_ROUTE, HOME_ROUTE} from "../utils";
import {Link} from "react-router-dom";

const NavBar = () => {
	return (
		<Navbar bg="light" variant="light">
			<Container>
				<Navbar.Brand>CryptoMir</Navbar.Brand>
				<Nav className="me-auto">
					<Link className='nav-link' to={LOGIN_ROUTE}> Логин </Link>
					<Link className='nav-link' to={CURRENCY_ROUTE}> Валюты </Link>
					<Link className='nav-link' to={TRENDS_ROUTE}>Тренды</Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavBar;