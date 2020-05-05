import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	color: olive;
	font-family: Roboto;
	font-size: 25px;
	margin: 5%;
`;
const StyledP = styled.p`
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

export default function Info() {
	return (
		<div>
			<Container>
				<StyledP>
					      Farm to Table is a place for people to connect with their
					local farmers and get involved in the community. Our farmers
					offer produce boxes which may vary based on the season and
					supply.
				</StyledP>

				<StyledP>
					See our calendar below to learn about events happening in
					the community.
				</StyledP>
			</Container>
		</div>
	);
}
