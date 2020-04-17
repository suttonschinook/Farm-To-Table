import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: whitesmoke;
  margin: 0 16px;
`;

export default function BootstrapNav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand to="/home">Farm To Table</Navbar.Brand>
        <Nav className="mr-auto">
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/recipes">Recipes</StyledLink>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </>
  );
}
