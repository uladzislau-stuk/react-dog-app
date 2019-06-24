import React from 'react';
import uuid from 'uuid/v4'
import { Card, ListGroup, Button } from "react-bootstrap"

import './DogDetails.css'

const DogDetails = ({ dogs, match }) => {
	const dog = dogs.find((d) => (
		d.name.toLowerCase() === match.params.name.toLowerCase()
	))

	return (
		<Card className='Card'>
			<Card.Img variant='top' src={dog.src} />
			<Card.Body>
				<Card.Title>{dog.name}</Card.Title>
				<Card.Subtitle className='text-muted'>{`${dog.age} years old`}</Card.Subtitle>
			</Card.Body>
			<ListGroup variant="flush">
				{dog.facts.map(fact => (
					<ListGroup.Item key={uuid()}>{fact}</ListGroup.Item>
				))}
			</ListGroup>
			<Card.Body>
				<Button variant="primary">Go back</Button>
			</Card.Body>
		</Card>
	);
};

export default DogDetails;