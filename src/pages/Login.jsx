import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

const Login = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector(state => state.login.isAuth);
	const [login, setLogin] = useState();
	const [password, setPassword] = useState();

	const logIn = (ev) =>{
		ev.preventDefault();
		if (login === "Admin" && password === "1234"){
			dispatch({type: "LOG_IN", name: login})
		}
		else
			alert(login);
	}

	const handleNameChange = (ev) => {
		setLogin(ev.target.value)
		console.log(login);
	}
	const handlePasswordChange = (ev) => {
		setPassword(ev.target.value)
		console.log(password);
	}

	return (
		isAuth ?
			<div>
				WELCOME
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
					<Form.Control onChange={e => handlePasswordChange(e)} type="password" placeholder="12*гхм*4" />
				</Form.Group>
				<Button onClick={(e) => logIn(e)} variant="primary" type="submit">
					Войти
				</Button>
			</Form>
		</div>
	);
};

export default Login;