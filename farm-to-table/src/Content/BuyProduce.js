import React, { useContext, useEffect } from "react";
import ProduceContext from "../Context/ProduceContext";
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
  const getProduce = useContext(ProduceContext);

  useEffect(() => {
    getProduce();
  }, []);
  return (
    <>
      <DisplayProduce />
      {/* <StyledProduce>
        <CardDeck>
          <Card>
            <Card.Img
              variant="top"
              height="160px"
              src="http://www.pngall.com/wp-content/uploads/2016/04/Apple-Fruit.png"
            />
            <Card.Body>
              <Card.Title>Apples</Card.Title>
              <Card.Text>
                Who doesn't like fresh apples? If someone doesn't like apples
                they should not be trusted......
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              height="160px"
              src="https://www.pngarts.com/files/3/Pineapple-PNG-Image-Background.png"
            />
            <Card.Body>
              <Card.Title>Pineapple</Card.Title>
              <Card.Text>
                Did you know Pineapples grow on a bush close to the ground?
                Wait, you thought they grew on tress!? I suddenly think less of
                you....{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              height="160px"
              src="http://www.pngall.com/wp-content/uploads/2016/04/Eggplant-Free-Download-PNG.png"
            />
            <Card.Body>
              <Card.Title>Eggplant</Card.Title>
              <Card.Text>
                Eggplant. We have it, you want it. What else is there to say?
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </StyledProduce> */}
    </>
  );
}
