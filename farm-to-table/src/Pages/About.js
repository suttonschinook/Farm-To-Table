import React, { useState } from 'react';
import Header from '../ReusableComponents/Header';
import BootstrapNav from '../ReusableComponents/BootstrapNav';
import Info from '../Content/Info';
import Footer from '../ReusableComponents/Footer';
import Carousel from 'react-bootstrap/Carousel';
import MyApp from '../Content/MyApp.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'

const StyledCarousel = styled.div`
@media only screen and (min-width:1000px){
	display:flex;
	justify-content:center;
	align-items:center;
	margin-top:5%;
	margin-bottom:5%;
	width:900px;
	margin-left:auto;
	margin-right:auto;
}
`

const StyledTitle = styled.h1`
	@media only screen and (max-width:500px){
		font-size:12px;
	}
	@media only screen and (min-width:500px){
		font-size:20px;
	}
	@media only screen and (min width:1000px){
		font-size:30px;
	}
	`



export default function About() {
	function ControlledCarousel() {
		const [index, setIndex] = useState(0);

		const handleSelect = (selectedIndex, e) => {
			setIndex(selectedIndex);
		};
		return (
			<Container fluid>
  <Row>
    <Col>
		<Carousel activeIndex={index} onSelect={handleSelect}>
			<Carousel.Item className='slide1'>
				<img
					className='d-block w-100'
					src='https://images.unsplash.com/photo-1562592306-54967af3926d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
					alt='First slide'
				/>
				<Carousel.Caption>
					<StyledTitle>Sustainable Farms</StyledTitle>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className='d-block w-100'
					src='https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
					alt='Second slide'
				/>
				<Carousel.Caption>
					<StyledTitle>Fresh Produce</StyledTitle>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className='d-block w-100'
					src='https://images.unsplash.com/photo-1536236010565-78fbb2fb25d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
					alt='Third slide'
				/>
				<Carousel.Caption>
					<StyledTitle>Locally Sourced</StyledTitle>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel></Col>
  </Row>
</Container>
			
		);
	}
	return (
		<div>
			<BootstrapNav />
			<Header />
			<StyledCarousel>
				<ControlledCarousel />
			</StyledCarousel>
			<Info />
			<MyApp />
			<Footer />
		</div>
	);
}
