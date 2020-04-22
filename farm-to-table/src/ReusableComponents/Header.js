import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const StyledContainer = styled.div`
  height:40px;


`
const StyledHeader = styled.h1`

  display: flex;
  justify-content: center;
  color:rgb(43, 42, 42);
  font-family:'Roboto', sans-serif;
  font-size:70px;
  text-shadow: 2px 2px darkgray;
  height:5vh;
  margin-top:-4%;
`
const StyledFarmer = styled.h2`
color:rgb(43, 42, 42);
font-family:'Roboto', sans-serif;
font-size:18px;
font-style:italic;
height:3px;
margin-top:4%;
margin-left:15%;

`


export default function Header() {
  return (
    <Jumbotron fluid>
      <StyledContainer>
        <Container>
          <StyledHeader className = "header">Farm to Table</StyledHeader>
          <StyledFarmer>A virtual farmers market experience</StyledFarmer>
        </Container>
      </StyledContainer>
    </Jumbotron>
  );
}
