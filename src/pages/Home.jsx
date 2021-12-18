import React from 'react';
import axios from "axios";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

const Home = () => {

	const dispatch = useDispatch();
	const list = useSelector(state => state.price.data);

	async function fetch(){
		const response = await axios.get('https://api.coingecko.com/api/v3/coins/list')
			.then(response => (dispatch({type: 'UPDATE', data: response.data})))
			.catch(error => console.log(error))
		console.log(response);
	}

	return (
		<div>
			CRYPTOOOOOO!
			<Button onClick={fetch} className='accordion-button'>KNOPKA</Button>
		</div>
	);
};

export default Home;