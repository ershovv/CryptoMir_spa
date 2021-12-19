import React from 'react';
import {Button, Card} from "react-bootstrap";
import CryptoBlock from "../components/CryptoBlock";
import {useSelector} from "react-redux";

const Currency = () => {

	const data = useSelector(state => state.price.data);

	// console.log(data);
	return (
		<div className='container'>
			<div className='row'>
				{/*<CryptoBlock data={data} />*/}
				{data.map( (val) => (
					<CryptoBlock key={val.id} data={val}/>
				))}
			</div>
		</div>
	);
};

export default Currency;