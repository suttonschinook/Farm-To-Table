import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import styled from "styled-components"



const StyledHeader = styled.h1`
  display:flex;
  justify-content:center;
  color:rgb(43, 42, 42);
  font-family:'Roboto', sans-serif;
  font-size:90px;
  text-shadow: 2px 2px darkgray;
  height:5vh;
  margin-top:-3%;
`
const StyledFarmer = styled.h2`
display:flex;
justify-content:center;
color:rgb(43, 42, 42);
font-family:'Roboto', sans-serif;
font-size:20px;
font-style:italic;
height:3px;
margin-top:6%;
`

export default function Header() {
  return (
    
    <Jumbotron fluid>
      <Container>
        <StyledHeader className = "header">Farm to Table</StyledHeader>
        <StyledFarmer>A virtual farmers market experience</StyledFarmer>
      </Container>
    </Jumbotron>
    
  );
}
