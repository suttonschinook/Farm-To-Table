import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: whitesmoke;
  margin: 0 16px;
`;

export default function BootstrapNav() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand to="/home">
          <img
            alt=""
            height="40px"
            src="http://ourhealthylives.org/wp-content/uploads/2013/03/farm-box-768x512.png"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/produce">Buy Produce</StyledLink>
          <StyledLink to="/recipes">Recipes</StyledLink>
          <StyledLink to="/about">About</StyledLink>
        </Nav>
      </Navbar>
    </>
  );
}
