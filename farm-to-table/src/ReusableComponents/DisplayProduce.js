import React, { useContext } from 'react';
import { InfoContext } from '../Context/InfoContext';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const StyledProduce = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 50vw;
	margin: auto;
	justify-content: center;
	align-items: center;
`;
const StyledCardDeck = styled(CardDeck)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default function DisplayProduce() {
	const { produceAvailable } = useContext(InfoContext);
	const produce = produceAvailable.map((item) => (
		<Card style={{ width: '240px' }}>
			<Card.Img variant='top' height='160px' src={item.img} />
			<Card.Body>
				<Card.Title>{item.title}</Card.Title>
				<Card.Text>{item.description}</Card.Text>
			</Card.Body>
			<Card.Footer>
				<small>Price: ${item.price}</small>
			</Card.Footer>
		</Card>
	));
	return (
		<StyledProduce>
			<StyledCardDeck>{produce}</StyledCardDeck>
		</StyledProduce>
	);
}
