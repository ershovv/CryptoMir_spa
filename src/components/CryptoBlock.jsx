import React from 'react';
import {Button, Card} from "react-bootstrap";

const CryptoBlock = (props) =>
{
	// console.log(props.data)
	return(
		<Card style={{ width: '10rem' }}>
			<Card.Body>
				<Card.Title>{props.data.name}</Card.Title>
				{/*<img src={props.data.image.thumb}/>*/}
				<Card.Text>
					{/*{value}*/}
				</Card.Text>
				<Button className='btn-lg'>Перейти</Button>
			</Card.Body>
		</Card>
	);
}

export default CryptoBlock;