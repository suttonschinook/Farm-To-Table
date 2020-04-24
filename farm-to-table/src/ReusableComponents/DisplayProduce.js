import React, { useContext } from "react";
import { ProduceContext } from "../Context/ProduceContext";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

const StyledProduce = styled.div`
  display: flex;
  width: 50vw;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

export default function DisplayProduce() {
  const { produceAvailable } = useContext(ProduceContext);
  const produce = produceAvailable.map((item) => (
    <Card style={{ width: "240px" }}>
      <Card.Img variant="top" height="160px" src={item.img} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small>Price: ${item.price}</small>
      </Card.Footer>
    </Card>
  ));
  return (
    <StyledProduce>
      <CardDeck>{produce}</CardDeck>
    </StyledProduce>
  );
}
