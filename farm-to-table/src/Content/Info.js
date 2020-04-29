import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	color: olive;
	font-family: Roboto;
	font-size: 25px;
	margin: 5%;
`;

export default function Info() {
	return (
		<div>
			<Container>
				<p>
					Farm to Table is a place for people to connect with their
					local farmers and get involved in the community. Our farmers
					offer produce boxes which may vary based on the season and
					supply.
				</p>

				<h1>
					See our calendar below to learn about events happening in
					the community.
				</h1>
			</Container>
		</div>
	);
}
