import React from 'react';
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";

const NavBar = () => {
	return (
	<div>
		<Navbar bg="light" variant="light">
			<Container>
				<Navbar.Brand href="/">CryptoMir</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="/login">Логин</Nav.Link>
					<Nav.Link href="/currency">Валюты</Nav.Link>
					<Nav.Link href="/trends">Тренды</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	</div>
	);
};

export default NavBar;