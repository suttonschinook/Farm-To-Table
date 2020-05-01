import React from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const StyledContainer = styled.div`
	height: 40px;
`;
const StyledTitle = styled(Link)`
	display: flex;
	:hover {
		text-decoration: none;
	}
	justify-content: space-around;
	color: rgb(43, 42, 42);
	font-family: 'Roboto', sans-serif;
	font-size: 70px;
	text-shadow: 2px 2px darkgray;
	height: 5vh;
	margin-top: -50px;
`;
const StyledFarmer = styled.h2`
	display: flex;
	color: rgb(43, 42, 42);
	font-family: 'Roboto', sans-serif;
	font-size: 18px;
	font-style: italic;
	height: 3px;
	justify-content: space-around;
	align-items: center;
	margin-top: 40px;
	margin-left: auto;
	margin-right: auto;
`;

export default function Header() {
	return (
		<Jumbotron fluid>
			<StyledContainer>
				<Container>
					<StyledTitle to='/' className='header'>
						Farm to Table
					</StyledTitle>
					<StyledFarmer>
						A virtual farmers market experience
					</StyledFarmer>
				</Container>
			</StyledContainer>
		</Jumbotron>
	);
}
