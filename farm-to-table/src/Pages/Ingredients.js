import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BootstrapNav from '../ReusableComponents/BootstrapNav';
import Header from '../ReusableComponents/Header';
import Footer from '../ReusableComponents/Footer';
import styled from 'styled-components';

const StyledMeal = styled.div`
	font-family: 'Roboto';
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	font-family: 'Roboto';
	padding: 10px;
`;
const StyledTitle = styled.h1`
	display: flex;
	font-size: 50px;
	grid-column: 3/4;
	justify-content: center;
`;

const StyledImg = styled.img`
	display: flex;
	grid-column: 3/4;
	width: 100%;
	justify-content: center;
`;

const StyledInstructionTitle = styled.h2`
	display: flex;
	justify-content: center;
	font-weight: 'bold';
	font-size: '30px';
	grid-column: 1/3;
	grid-row: 3/4;
	@media only screen and (max-width: 400px) {
		grid-column: 1/-1;
		grid-row: 3/4;
	}
`;
const StyledInstructions = styled.h5`
	display: flex;
	justify-content: center;
	padding: 10px;
	grid-column: 1/4;
	grid-row: 4/5;
	@media only screen and (max-width: 400px) {
		grid-column: 1/-1;
		grid-row: 4/5;
	}
`;

const StyledIngredients = styled.h3`
	display: flex;
	justify-content: center;
	grid-column: 4/6;
	grid-row: 3/4;
	@media only screen and (max-width: 400px) {
		grid-column: 1/-1;
		grid-row: 5/6;
	}
`;

const StyledUl = styled.ul`
	display: table-cell;
	vertical-align: text-top;
	text-align: center;
	grid-column: 4/6;
	grid-row: 4/5;
	@media only screen and (max-width: 400px) {
		grid-column: 1/-1;
		grid-row: 6/7;
	}
`;
const StyledMealInfo = styled.div``;

export default function Ingredients(props) {
	const { id } = useParams();
	useEffect(() => {
		fetchItems();
	}, []);

	const [item, setItems] = useState('');

	const fetchItems = () => {
		fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.meals[0]);
				setItems(data.meals[0]);
			});
	};

	const [ingredients] = useState([]);

	for (let i = 1; i <= 20; i++) {
		if (item[`strIngredient${i}`]) {
			ingredients.push(
				`${item[`strIngredient${i}`]} - ${item[`strMeasure${i}`]}`
			);
		} else {
			break;
		}
	}

	return (
		<>
			<BootstrapNav />
			<Header />
			<div class='single-meal'>
				<StyledMeal>
					<StyledTitle>{item.strMeal} </StyledTitle>
					<StyledImg src={item.strMealThumb} alt='' />
					<StyledInstructionTitle>
						Instructions
					</StyledInstructionTitle>
					<StyledInstructions>
						{item.strInstructions}
					</StyledInstructions>

					<StyledIngredients>Ingredients</StyledIngredients>
					{console.log(ingredients)}
					<StyledUl>
						{ingredients.map((ing) => (
							<li>{ing}</li>
						))}
					</StyledUl>
				</StyledMeal>
				<StyledMealInfo class='single-meal-info'>
					{item.strCategory ? (
						<p>Category: {item.strCategory}</p>
					) : (
						''
					)}
					{item.strArea ? <p> Origin: {item.strArea}</p> : ''}
				</StyledMealInfo>
			</div>
			<Footer />
		</>
	);
}

//  Going to need in the future...

//  <Route path="/:id">
//  <Ingredients />
//  </Route>
