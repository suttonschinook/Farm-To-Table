import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const StyledNav = styled.nav`
  @media (max-width: 400px) {
    display: flex;
    background-color: black;
    justify-content: space-evenly;
    align-items: center;
    height: 10vh;
    font-family: Roboto;
    font-size: 15px;
    text-shadow: 1px 1px grey;
  }
  @media (max-width: 600px) {
    display: flex;
    background-color: black;
    justify-content: space-evenly;
    align-items: center;
    height: 10vh;
    font-family: Roboto;
    font-size: 15px;
    text-shadow: 1px 1px grey;
  }
  @media (min-width: 600px) {
    display: flex;
    background-color: black;
    justify-content: space-evenly;
    align-items: center;
    height: 10vh;
    font-family: Roboto;
    font-size: 20px;
    text-shadow: 2px 2px grey;
  }

<<<<<<< HEAD
  @media (min-width: 1000px) {
    display: flex;
    background-color: black;
    justify-content: space-evenly;
    align-items: center;
    height: 10vh;
    font-family: Roboto;
    font-size: 25px;
    text-shadow: 1px 2px grey;
  }
`;

export default function Navbar() {
  return (
    <div>
      <StyledNav>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/recipes">RECIPES</Link>
      </StyledNav>
    </div>
  );
=======
	@media(min-width:1000px){
	display:flex;
	background-color:black;
	justify-content:space-evenly;
	align-items:center;
	height:10vh;
	font-family:Roboto;
	font-size:25px;
	text-shadow:1px 2px grey;
}
`

export default function Navbar() {
	return (
		<div>
			<StyledNav>
                <Link to = "/">HOME</Link>
                <Link to = "/about">ABOUT</Link>
                <Link to = "/recipes">RECIPES</Link>
            </StyledNav>
		</div>
	)
>>>>>>> a99a1629d3edb6d748d63158e6f58fb56006e47a
}
