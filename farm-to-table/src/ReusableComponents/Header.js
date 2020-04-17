import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import styled from "styled-components"

const StyledHeader = styled.h1`
  color:rgb(43, 42, 42);
  font-family:Georgia, 'Times New Roman', Times, serif;
  font-size:80px;
  text-shadow: 2px 2px darkgray;
  height:5vh;
  margin-top:-3%;
`
const StyledFarmer = styled.h2`
color:rgb(43, 42, 42);
font-family:Georgia, 'Times New Roman', Times, serif;
font-size:20px;
font-style:italic;
height:5px;
margin-top:6%;
`

export default function Header() {
  return (
    <Jumbotron fluid>
      <Container>
        <StyledHeader>Farm to Table
          {/* <h2 className = "farmer">A virtual farmers market experience</h2> */}
        </StyledHeader>
        <StyledFarmer>A virtual farmers market experience</StyledFarmer>
      </Container>
    </Jumbotron>
  );
}
