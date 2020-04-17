import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'

export default function Main() {

  function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
              <h1>Sustainable Farms</h1>
              <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1495570689269-d883b1224443?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1>Fresh Produce</h1>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1528505086635-4c69d5f10908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1089&q=80"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1>Locally Sourced</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );

            
           
            
  
    
  }
  return (
    <div>
      <ControlledCarousel />
    </div>
  );
}
  
  
