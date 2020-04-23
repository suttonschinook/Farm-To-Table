import React, {useState} from "react";
import Header from "../ReusableComponents/Header";
import BootstrapNav from "../ReusableComponents/BootstrapNav";
import Info from "../Content/Info";
import Footer from "../ReusableComponents/Footer";
import styled from "styled-components"
import Carousel from 'react-bootstrap/Carousel'
import MyApp from '../Content/MyApp.js'


const Container = styled.div`

  width:750px;
  margin-left:22%;
`


export default function About() {

  function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
      <Container>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item className = "slide1">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1562592306-54967af3926d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
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
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
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
              src="https://images.unsplash.com/photo-1536236010565-78fbb2fb25d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>Locally Sourced</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container> 
      
  );
  }

  return (
    <div>
      <BootstrapNav />
      <Header />
      <ControlledCarousel />
      <Info />
      <MyApp/>
      <Footer />
    </div>
  );
}
