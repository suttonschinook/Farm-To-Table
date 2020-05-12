import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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

export default function Main() {
	function ControlledCarousel() {
		const [index, setIndex] = useState(0);

		const handleSelect = (selectedIndex, e) => {
			setIndex(selectedIndex);
		};

		return (
			<StyledCarousel>
				<Container fluid>
					<Carousel activeIndex={index} onSelect={handleSelect}>
						<Carousel.Item className='slide1'>
							<img
								className='d-block w-100'
								src='https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
								alt='First slide'
							/>
							<Carousel.Caption>
								<StyledTitle>Sustainable Farms</StyledTitle>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className='d-block w-100'
								src='https://images.unsplash.com/photo-1495570689269-d883b1224443?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80'
								alt='Second slide'
								/>
							<Carousel.Caption>
								<StyledTitle>Fresh Produce</StyledTitle>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className='d-block w-100'
								src='https://images.unsplash.com/photo-1571945227444-5856cd40e6b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
								alt='Third slide'
							/>
							<Carousel.Caption>
								<StyledTitle>Locally Sourced</StyledTitle>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Container>		
			</StyledCarousel>
			);
	}
	return (
		<Container fluid>
  <Row>
    <Col><ControlledCarousel /></Col>
  </Row>
</Container>
			
		
	);
}
