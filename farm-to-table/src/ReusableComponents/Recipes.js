import React from 'react';
import { Link } from 'react-router-dom';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const StyledRecipe = styled.div`
	display: flex;
	width: 50vw;
	margin: auto;
	justify-content: center;
	align-items: center;
`;

export default function Recipes(props) {
	const { title, image, id } = props;
	return (
		<>
			<StyledRecipe className='meal'>
				<CardDeck>
					<Link to={`/${id}`}>
						<Card style={{ width: '240px' }}>
							<Card.Img
								variant='top'
								height='160px'
								src={image}
								alt=''
								className='mealImg'
							/>
							<Card.Body>
								<Card.Title>{title}</Card.Title>
							</Card.Body>
						</Card>
					</Link>
				</CardDeck>
			</StyledRecipe>
		</>
	);
}
