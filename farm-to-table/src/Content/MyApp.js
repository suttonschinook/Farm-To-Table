import React, { Component } from 'react';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const StyledIframe = styled.div`
@media only screen and (max-width:400px){
	height:400px;
}
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
						src='https://calendar.google.com/calendar/embed?height=500&amp;wkst=1&amp;bgcolor=%237986CB&amp;ctz=America%2FDenver&amp;src=MWZsbG4yYWFkdG9lZjJqN2Nmcm5tNWNtajBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23E4C441&amp;title=FARM%20TO%20TABLE%20EVENTS&amp;showPrint=0&amp;showTitle=0'
						frameborder='0'
						scrolling='no'
						height = '300px'
						width = '400px'
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
