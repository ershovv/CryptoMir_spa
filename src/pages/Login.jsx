import React from 'react';
import {Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

const Login = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector(state => state.isAuth);

	const logIn = (ev) =>{
		ev.preventDefault();
		dispatch({type: "LOG_IN"})
	}

	return (
		<div>
			<Form>
				<Form.Group className="mb-3" controlId="formBa">
					<Form.Label>Логин</Form.Label>
					<Form.Control type="login" placeholder="try Admin"/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Пароль</Form.Label>
					<Form.Control type="password" placeholder="12*гхм*4" />
				</Form.Group>
				<Button onClick={(e) => logIn(e)} variant="primary" type="submit">
					Войти
				</Button>
			</Form>
		</div>
	);
};

export default Login;