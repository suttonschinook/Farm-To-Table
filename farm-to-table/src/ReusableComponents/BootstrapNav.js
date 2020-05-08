import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const StyledLink = styled(Link)`
	@media only screen and (max-width: 400px) {
		color: whitesmoke;
		margin: 0 6px;
		display: flex;
		justify-content: space-around;
		font-size: 6px;
	}
	@media only screen and (max-width: 600px) {
		color: whitesmoke;
		margin: 0 7px;
		font-size: 9px;
		display: flex;
		justify-content: space-around;
	}
	@media only screen and (min-width: 600px) {
		color: whitesmoke;
		margin: 0 9px;
		font-size: 15px;
		display: flex;
		justify-content: space-around;
	}
`;

export default function BootstrapNav() {
	return (
		<>
			<Container fluid>
				<Row>
					<Col>
						<Navbar bg='dark' variant='dark'>
							<Navbar.Brand to='/home'>
								<img
									alt=''
									height='40px'
									src='http://ourhealthylives.org/wp-content/uploads/2013/03/farm-box-768x512.png'
								/>
							</Navbar.Brand>
							<Nav className='mr-auto'>
								<StyledLink to='/'>Home</StyledLink>
								<StyledLink to='/produce'>
									Buy Produce
								</StyledLink>
								<StyledLink to='/recipes'>Recipes</StyledLink>
								<StyledLink to='/about'>About</StyledLink>
							</Nav>
						</Navbar>
					</Col>
				</Row>
			</Container>
		</>
	);
}
