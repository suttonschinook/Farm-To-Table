import React, { useState } from 'react';
export const InfoContext = React.createContext();
const axios = require('axios');

export default function InfoProvider(props) {
	const [infoState, setInfoState] = useState({
		produceAvailable: [],
	});

	function getProduce() {
		axios.get('/produce').then((response) => {
			console.log(response);
			setInfoState((prev) => ({
				...prev,
				produceAvailable: response.data,
			}));
		});
	}

	return (
		<InfoContext.Provider value={{ ...infoState, getProduce }}>
			{props.children}
		</InfoContext.Provider>
	);
}
