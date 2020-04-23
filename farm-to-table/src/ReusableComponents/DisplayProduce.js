import React, { useEffect, useContext } from "react";
import ProduceContext from "../Context/ProduceContext";
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
  const { produceInfo } = useContext(ProduceContext).data;
  return (
    <Card>
      <Card.Img variant="top" height="160px" src={produceInfo.img} />
      <Card.Body>
        <Card.Title>{produceInfo.title}</Card.Title>
        <Card.Text>{produceInfo.text}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small>Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
}
