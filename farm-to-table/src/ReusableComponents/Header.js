import React from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const StyledTitle = styled(Link)`
@media only screen and (max-width:600px){
	display: flex;
	:hover {
		text-decoration: none;
	}
	justify-content: space-around;
	color: rgb(43, 42, 42);
	font-family: 'Roboto', sans-serif;
	font-size: 26px;
	text-shadow: 1px 1px darkgray;
	height: 5px;
	margin:auto;
	margin-top:-6%;
	margin-bottom:2%;
}
@media only screen and (min-width:600px){
	font-size:30px;
	display: flex;
	:hover {
		text-decoration: none;
	}
	justify-content: space-around;
	color: rgb(43, 42, 42);
	font-family: 'Roboto', sans-serif;
	text-shadow: 2px 2px darkgray;
	height: 5px;
	margin-top: -6%;;
}
@media only screen and (min-width:1000px){
	font-size:40px;
	display: flex;
	:hover {
		text-decoration: none;
	}
	justify-content: space-around;
	color: rgb(43, 42, 42);
	font-family: 'Roboto', sans-serif;
	font-size: 55px;
	text-shadow: 3px 3px darkgray;
	height: -5px;
	margin-top:-4%;
}
`;

const StyledFarmer = styled.h2`
@media only screen and (max-width:600px){
	display: flex;
	color: rgb(43, 42, 42);
	font-family: 'Roboto', sans-serif;
	font-size: 10px;
	font-style: italic;
	justify-content: center;
	align-items: center;
	margin-top: 8%;
	margin-left: auto;
	margin-right: auto;
}
@media only screen and (min-width:600px){
	display:flex;
	font-size: 18px;
	height: 3px;
	justify-content: space-around;
	align-items: center;
	margin-top: 40px;
	margin-top: 8%;
	margin-left:auto;
	margin-right:auto;
	font-family: 'Roboto', sans-serif;
	font-style: italic;
}

@media only screen and (min-width:1000px){
	display: flex;
	color: rgb(43, 42, 42);
	font-family: 'Roboto', sans-serif;
	font-size: 20px;
	font-style: italic;
	justify-content: space-around;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
	margin-top: 6%;
}
`;

export default function Header() {
	return (
		<Container fluid>
  <Row>
    <Col>
		<Jumbotron fluid>
				<Container fluid style ={{height:'4vh'}}>
					<StyledTitle to='/' className='header'>
						Farm to Table
					</StyledTitle>
					<StyledFarmer>
						A virtual farmers market experience
					</StyledFarmer>
				</Container>
		</Jumbotron>

	</Col>
  </Row>
</Container>
	);
}
