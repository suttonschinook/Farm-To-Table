import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const Container = styled.div`
	width: 750px;
	margin-left: 22%;
`;

export default function Main() {
	function ControlledCarousel() {
		const [index, setIndex] = useState(0);

		const handleSelect = (selectedIndex, e) => {
			setIndex(selectedIndex);
		};

		return (
			<Container>
				<Carousel activeIndex={index} onSelect={handleSelect}>
					<Carousel.Item className='slide1'>
						<img
							className='d-block w-100'
							src='https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
							alt='First slide'
						/>
						<Carousel.Caption>
							<h1>Sustainable Farms</h1>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='https://images.unsplash.com/photo-1495570689269-d883b1224443?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80'
							alt='Second slide'
						/>
						<Carousel.Caption>
							<h1>Fresh Produce</h1>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='https://images.unsplash.com/photo-1571945227444-5856cd40e6b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
							alt='Third slide'
						/>
						<Carousel.Caption>
							<h1>Locally Sourced</h1>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</Container>
		);
	}
	return (
		<div>
			<ControlledCarousel />
		</div>
	);
}
