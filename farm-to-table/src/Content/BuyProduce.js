import React, { useContext, useEffect } from "react";
import { ProduceContext } from "../Context/ProduceContext";
import DisplayProduce from "../ReusableComponents/DisplayProduce";
// import Card from "react-bootstrap/Card";
// import CardDeck from "react-bootstrap/CardDeck";
import styled from "styled-components";

const StyledProduce = styled.div`
  display: flex;
  width: 50vw;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

export default function BuyProduce() {
  const { getProduce } = useContext(ProduceContext);

  useEffect(() => {
    getProduce();
  }, []);
  return (
    <>
      <DisplayProduce />
    </>
  );
}
