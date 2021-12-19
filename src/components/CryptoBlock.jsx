import React from 'react';
import {Button, Card} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const CryptoBlock = (props) =>
{
	const dispatch = useDispatch()
	// console.log(props.data)
	return(
		<Card style={{ width: '10rem' }}>
			<Card.Body>
				<Card.Title>{props.data.id}</Card.Title>
				{/*<img src={props.data.image.thumb}/>*/}
				<Card.Text>
					{/*{value}*/}
				</Card.Text>
				<Link onClick={() => dispatch({type: "CHOOSE_COIN", name: props.data.name, id: props.data.id})}
					  className='btn-dark'
					  to='/trends'>  Перейти</Link>
			</Card.Body>
		</Card>
	);
}

export default CryptoBlock;