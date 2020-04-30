import React, { useEffect, useState } from 'react';
import Recipes from '../ReusableComponents/Recipes.js';
import Header from '../ReusableComponents/Header';
import BootstrapNav from '../ReusableComponents/BootstrapNav';
import Footer from '../ReusableComponents/Footer';
import CardDeck from 'react-bootstrap/CardDeck';
import styled from 'styled-components';

const StyledFormContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`;

const StyledTitle = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;
	grid-column: 2/3;
	grid-row: 1/2;
`;

const StyledForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	grid-column: 2/3;
	grid-row: 2/3;
	margin-bottom: 20px;
`;

const StyledCardDeck = styled(CardDeck)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default function RecipeMain() {
	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('');

	useEffect(() => {
		getRecipes();
	}, [query]);

	const getRecipes = () => {
		fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.meals);
				if (data.meals === null) {
					return alert('There are no search results. Try again.');
				} else {
					setRecipes(data.meals);
				}
			});
	};

	const handleChange = (event) => {
		setSearch(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setQuery(search);
		setSearch('');
	};

	return (
		<>
			<BootstrapNav />
			<Header />
			<div>
				<StyledFormContainer>
					<StyledTitle>Recipe Finder</StyledTitle>
					<StyledForm onSubmit={handleSubmit} className=''>
						<input
							placeholder='Search for a meal'
							className='search'
							type='text'
							value={search}
							onChange={handleChange}
						/>
						<button className='search-btn' type='submit'>
							Search
						</button>
					</StyledForm>
				</StyledFormContainer>
				<StyledCardDeck>
					{recipes.map((recipe) => (
						<Recipes
							key={recipe.idMeal}
							id={recipe.idMeal}
							title={recipe.strMeal}
							image={recipe.strMealThumb}
						/>
					))}
				</StyledCardDeck>
			</div>
			<Footer />
		</>
	);
}
