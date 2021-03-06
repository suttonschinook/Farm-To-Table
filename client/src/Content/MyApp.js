import React, { Component } from 'react';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const StyledIframe = styled.div`
	@media only screen and (max-width: 400px) {
		height: 250px;
	}
	@media only screen and (max-width: 600px) {
		display: flex;
		justify-content: center;
		height: 500px;
		margin-top: 10%;
	}
	@media only screen and (min-width: 600px) {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 600px;
	}
	@media only screen and (min-width: 1000px) {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 5%;
		margin-left: auto;
		margin-right: auto;
		height: 600px;
		width: 500px;
	}
`;

class MyApp extends Component {
	state = {
		date: new Date(),
	};

	onChange = (date) => this.setState({ date });

	render() {
		return (
			<div>
				<Container fluid>
					<Row>
						<Col>
							<StyledIframe>
								<iframe
									title='Calander'
									src='https://calendar.google.com/calendar/embed?height=500&amp;wkst=1&amp;bgcolor=%237986CB&amp;ctz=America%2FDenver&amp;src=MWZsbG4yYWFkdG9lZjJqN2Nmcm5tNWNtajBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23E4C441&amp;title=FARM%20TO%20TABLE%20EVENTS&amp;showPrint=0&amp;showTitle=0'
									frameborder='0'
									scrolling='no'
									height='400px'
									width='400px'
								></iframe>
							</StyledIframe>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default MyApp;
