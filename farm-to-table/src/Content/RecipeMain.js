import React, { useContext, useEffect } from 'react';
import { InfoContext } from '../Context/InfoContext';
import DisplayRecipes from '../ReusableComponents/DisplayRecipes';

export default function RecipeMain() {
	const { getRecipes } = useContext(InfoContext);

	useEffect(() => {
		getRecipes();
	}, []);
	return (
		<>
			<DisplayRecipes />
		</>
	);
}
