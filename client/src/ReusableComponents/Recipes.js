import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
`;

export default function Recipes(props) {
	const { title, image, id } = props;
	return (
		<div>
			<Container>
				<Link to={`/${id}`}>
					<Card
						className='meal'
						style={{
							border: '5px solid grey',
							padding: '5%',
							width: '25rem',
							marginBottom: '7%',
						}}
					>
						<Card.Img variant='top' src={image} />
						<Card.Body>
							<Card.Title>{title}</Card.Title>
							<button className='button' variant='primary'>
								See Recipe
							</button>
						</Card.Body>
					</Card>
				</Link>
			</Container>
		</div>
	);
}
