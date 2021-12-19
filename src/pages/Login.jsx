import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

const Login = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector(state => state.login.isAuth);
	const NAME = useSelector( state => state.login.name)
	const [login, setLogin] = useState();
	const [password, setPassword] = useState();

	const logIn = (ev) =>{
		ev.preventDefault();
		if (login === "Admin" && password === "1234"){
			dispatch({type: "LOG_IN", name: login})
		}
		else
		{
			alert("Имя или пароль неверные");
		}

	}
	const logOut = (ev) =>{
		ev.preventDefault();
		dispatch({type: "LOG_OUT", name: ""})
	}

	const handleNameChange = (ev) => {
		setLogin(ev.target.value)
	}
	const handlePasswordChange = (ev) => {
		setPassword(ev.target.value)
	}

	return (
		isAuth ?
			<div>
				<h1 className='align-content-between'>WELCOME, {NAME}</h1>
				<Button onClick={(e) => logOut(e)} variant="primary" type="button">
					Выйти
				</Button>
			</div>
		:
		<div>
			<Form>
				<Form.Group className="mb-3" controlId="formBa">
					<Form.Label>Логин</Form.Label>
					<Form.Control onChange={e => handleNameChange(e)} type="login" placeholder="try Admin"/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Пароль</Form.Label>
					<Form.Control onChange={e => handlePasswordChange(e)} type="password" placeholder="12*4" />
				</Form.Group>
				<Button onClick={(e) => logIn(e)} variant="primary" type="button">
					Войти
				</Button>
			</Form>
		</div>
	);
};

export default Login;