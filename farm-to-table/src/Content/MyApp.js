import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components'

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:5%;
`


 
class MyApp extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div>
        <Container>
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />
         </Container> 
      </div>
    );
  }
}
        
       
export default MyApp