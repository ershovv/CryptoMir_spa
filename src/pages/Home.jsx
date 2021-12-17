import React from 'react';
import axios from "axios";
import {Button} from "react-bootstrap";

const Home = () => {

	async function fetch(){
		const response = await axios.get('https://api.coingecko.com/api/v3/coins/list')
			.then(response => (console.log(response)))
			.catch(error => console.log(error))
	}

	return (
		<div>
			CRYPTOOOOOO!
			<Button onClick={fetch} className='accordion-button'>KNOPKA</Button>
		</div>
	);
};

export default Home;