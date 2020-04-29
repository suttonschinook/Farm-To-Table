
import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'

const Container = styled.div`
  display:block;
  
`

export default function Recipes(props) {
  const { title, image, id } = props;
  return(
    <div>
          
        <div className="meal">
            <Link to={`/${id}`}>
            <Container>
              <Card style={{ margin:'5%', width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  </Card.Text>
                <button variant="primary">Go somewhere</button>
                </Card.Body>
              </Card>
         
          </Container>  
          </Link>
        </div>
    </div>
  );

}
      
      
    
