
import React from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'

const Container = styled.div`
  display:grid;
  grid-template-columns: auto auto auto;
`


export default function Recipes(props) {
  const { title, image, id } = props;
  return(
    <div>
      <Container>
        <Link to={`/${id}`}>
          <Card className = "meal" style={{ border:'5px solid darkgray', margin:'5%', width: '25rem' }}>
            <Card.Img  variant="top" src={image}/>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
            <button className = "button" variant="primary">See Recipe</button>
            </Card.Body>
          </Card>
        </Link>
      </Container>
    </div>
  );
}
      
    
       

           
          
      
         
          

          
      
      
    
