import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import styled from "styled-components"


const StyledHeader = styled.h1`
  color:rgb(43, 42, 42);
  font-family:Georgia, 'Times New Roman', Times, serif;
  font-size:100px;
`
const StyledFarmer = styled.h1`
color:rgb(43, 42, 42);
font-family:Georgia, 'Times New Roman', Times, serif;
font-size:25px;

`

export default function Header() {
  return (
    <Jumbotron fluid>
      <Container>
        <StyledHeader>Farm to Table</StyledHeader>
        <StyledFarmer>A virtual farmers market experience</StyledFarmer>
      </Container>
    </Jumbotron>
  );
}
