import React from 'react';
import {Button, Form} from "react-bootstrap";

const Login = () => {
	return (
		<div>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Логин</Form.Label>
					<Form.Control type="login" placeholder="try Admin"/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Пароль</Form.Label>
					<Form.Control type="password" placeholder="12*гхм*4" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Войти
				</Button>
			</Form>
		</div>
	);
};

export default Login;